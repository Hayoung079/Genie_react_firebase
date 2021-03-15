import React, { useState } from "react";
import { CreateUser } from './Firebase';
import './App.css';
import './script/script';

var  agreementError = true;

const User =() => {
    
    // name, phone useState선언
    const [name, setName] = useState ('');
    const [phone, setPhone] = useState ('');
    const [checked, setChecked] = useState (false);

    // 이름 저장 함수
    const changeName = (e) => {
        setName(e.target.value);
    }
    
    // 폰번호 저장 함수
    const changePhone = (e) => {
        setPhone(e.target.value);
    }    

    // 체크 상태 확인
    const changeCheckbox = (e) => {
        setChecked(e.target.checked);
    }
    
    // submit 함수 
    const handleSubmit = (e) => {
        if(name !== "" && phone !== "" && checked === true) { 
            CreateUser(name, phone); // 파이어베이스에 저장
            e.preventDefault(); // 새로고침 안 되도록
        }
    }
    
    return  (
        <div className="form">
            {/* Signup Form */}
            <div className="signup form-peice">
            <form className="signup-form" action="#" method="post" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">이름</label>
                    <input type="text" name="username" value={name} id="name" className="name" onChange={changeName}/>
                    <span className="error"></span>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">전화번호 ( '-' 제외 )</label>
                    <input type="tel" name="phone"  id="phone" className="phone" pattern="[0-9]+" onChange={changePhone}/>
                    <span className="error"></span>
                </div>
                <div className="agreement_box form-group">
                <h2>이용약관</h2>
                <textarea readOnly value="This is a terms of service.">
            Lor ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque feugiat vehicula. Pellentesque leo risus, convallis quis felis a, venenatis consequat ex. Cras at porttitor lacus. Sed quis lorem lacinia, commodo sem eget, bibendum magna. Integer vel orci augue. Sed nec ex eu velit elementum rutrum eu congue metus. Quisque sollicitudin, nibh eget sodales accumsan, nisl ex dictum libero, a egestas purus purus tincidunt justo. Suspendisse lacinia lacus in massa tempor iaculis. Donec sit amet magna sed tortor congue auctor. Vivamus malesuada arcu ex, non tincidunt dolor vehicula at. Morbi porta ligula tristique, convallis massa in, placerat leo. Etiam vehicula egestas volutpat. Phasellus condimentum eleifend elit, vel pretium enim. Morbi posuere dolor metus, ac consectetur leo pulvinar vel. Donec in dui et augue tempor vehicula eget vitae ante. Etiam lobortis ex purus, at laoreet nibh pellentesque et. Vivamus magna est, pellentesque a ipsum in, efficitur convallis lectus. Nulla vitae euismod urna. Integer pharetra turpis vel consectetur accumsan. Nullam aliquam placerat consectetur. Sed elementum eros a hendrerit varius.
                </textarea>
                <div className="form_element">
                    <input type="checkbox" name="agreement_info" checked={checked} id="terms_agree_1" className="terms_agree_1" onChange={changeCheckbox}/>
                    <label htmlFor="terms_agree_1">
                    이용약관에 동의합니다.
                    </label>
                    <span className="error"></span>
                </div>
                </div>
                <div className="btn_center_box">
                    <input type="submit" value="다음" id="submit" />
                </div>
            </form>
            </div> {/*End Signup Form  */}
        </div> 
    );
}

export default User;