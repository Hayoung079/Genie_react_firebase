import React, { useState } from "react";
import { UpdateNum, UpdateNumLogin } from './Firebase';
import './App.css';
import './script/script';


// 증가하는 함수
const Counter = () => {
    //num useState선언
    const [num, setNum] = useState(0);

    const Plus = () => {
        const userId = window.sessionStorage.getItem('UserID');
        const currentNum = JSON.parse(window.sessionStorage.getItem('CurrentCount'));
        console.log(userId, currentNum);
        
        if(currentNum === 0) {
            setNum(num+1);
            UpdateNum(num + 1);  // 현재 수 데이터베이스에 쓰기
        }else {
            setNum(currentNum);
            UpdateNumLogin(userId, (num+1));
        }
    }

    return (
        <div className="btn_area">
            <div className="btn_wr">
                <button type="button" onClick={Plus}>click</button>
            </div>
            {/* <div class="result">COUNT: 0</div>  */}
        </div>
    );
}

export { Counter };