import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import uuid from "react-uuid";

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

// 1~ 1000 까지 난수 생성 
const usernumber = [];
const random = () => {
  let ranNum = Math.floor(Math.random()*100);
  if(!sameNum(ranNum)) {
    usernumber.push(ranNum);
    window.sessionStorage.setItem("userId", ranNum);
  }
  
}

// 중복 검사
const sameNum = (ranNum) => {
  for (let i=0; i <usernumber.length; i++) {
    if(ranNum === usernumber[i]) {
      return true;
    }
  }
  return false;
}

random();


//uuid 활용
//window.sessionStorage.setItem("userId", uuid());

let userId = window.sessionStorage.getItem("userId")

// 데이터 쓰기
const CreateUser = (userName, userPhone) => {
  const userListRef = firebase.database().ref('User');
  const newUserRef = userListRef.child('User' + userId);
  
  newUserRef.set({
    // userId: JSON.parse(userId),
    userName: userName,
    userPhone: userPhone
  });
}


// 숫자 버튼 클릭시 업데이트
const UpdateNum = (num) => {
  firebase.database().ref('User').child('User' + userId ).update({
  count: num
  });
}



// 필요한 곳에서 사용할 수 있도록 내보내기
export {CreateUser, UpdateNum};
