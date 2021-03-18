import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import  Counter  from './Counter';
// import uuid from "react-uuid";
//uuid 활용
//window.sessionStorage.setItem("userId", uuid());

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBptMJhUc4gjRfOHNYhybCgfQO5YQLdP3E",
  authDomain: "reactfirebase-30c10.firebaseapp.com",
  databaseURL: "https://reactfirebase-30c10-default-rtdb.firebaseio.com",
  projectId: "reactfirebase-30c10",
  storageBucket: "reactfirebase-30c10.appspot.com",
  messagingSenderId: "440103573360",
  appId: "1:440103573360:web:715853e90fb1563a8a61b5",
  measurementId: "G-S9BB5XF3JP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let number = []; // 숫자를 넣어 중복을 확인할 배열
let localNum = window.localStorage.getItem("ranNum");
  
if(!localNum){
  window.localStorage.setItem("ranNum", JSON.stringify(number));
}else{
  number = JSON.parse(localNum);
}

// userId 중복없이 랜덤숫자 생성 
const random = () => {   
  
  back:
  while(true){
    let ranNum = Math.floor(Math.random()*20+1); //1~20까지 숫자
  
    if(number.indexOf(ranNum) === -1){ // 중복숫자가 없으면
      number.push(ranNum);
      window.localStorage.setItem("ranNum", JSON.stringify(number)); // 로컬스토리지에 숫자배열 저장
      break;
    }else{ // 있으면 다시 숫자 뽑기
      continue back;
    }
  }
}


// 데이터 쓰기
const CreateUser = (userName, userPhone) => {
  const userIdArr = JSON.parse(window.localStorage.getItem("ranNum")) ;
  const userId = userIdArr[userIdArr.length-1];
  const userListRef = firebase.database().ref('Users');
  const newUserRef = userListRef.child('User' + userId);
  
  newUserRef.set({
    userId: JSON.parse(userId),
    userName: userName,
    userPhone: userPhone
  });
}


// 숫자 버튼 클릭시 업데이트
const UpdateNum = (num) => {
  const userIdArr = JSON.parse(window.localStorage.getItem("ranNum")) ;
  const userId = userIdArr[userIdArr.length-1];
  console.log(userId)
  firebase.database().ref('Users').child('User' + userId ).update({
    count: num
  });
}

const UpdateNumLogin = (userId ,num) => {
  console.log(userId)
  firebase.database().ref('Users').child('User' + userId ).update({
    count: num
  });
}


// // 데이터 읽기 -- 중복 회원가입 안 되게
const ReadUser = (userName, userPhone) => { //휴대폰 번호로 판단
  random();

  const phoneRef = firebase.database().ref('Users').orderByChild('userPhone').equalTo(userPhone);
  phoneRef.once("value", function(snapshot){
    if (snapshot.exists()){
      console.log("exists!");
      // localStorage에 배열 마지막 값 삭제하기
      number.pop();
      window.localStorage.setItem("ranNum", JSON.stringify(number));
      alert("가입한 회원")
      
      // 일치하는 노드에 (userId) count++ 하기
      const userIdObj= snapshot.val()[Object.keys(snapshot.val())[0]];
      const userCount = userIdObj[Object.keys(userIdObj)[0]];
      const userId = userIdObj[Object.keys(userIdObj)[1]];
      console.log(userId, userCount);
      
      window.sessionStorage.setItem("UserID", userId);
      window.sessionStorage.setItem("CurrentCount", userCount);
      Counter();
      
    }else{
      console.log("not exists!");
      CreateUser(userName, userPhone);
      window.sessionStorage.setItem("CurrentCount", 0);
      Counter();
    }
  });
}


// 필요한 곳에서 사용할 수 있도록 내보내기
export {CreateUser, UpdateNum, ReadUser, UpdateNumLogin};
