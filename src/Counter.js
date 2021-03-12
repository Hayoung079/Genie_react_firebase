import React, { useState } from "react";
import { UpdateNum } from './Firebase';
import './App.css';
import './script/script';

const Counter = () => {
    //num useState선언
    const [num, setNum] = useState(0);
    
    // 증가하는 함수
    const Plus = () => {    
        setNum(num+1);
        UpdateNum(num + 1); // 현재 수 데이터베이스에 쓰기
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

export default Counter;