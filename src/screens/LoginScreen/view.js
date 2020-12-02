import React from "react";
import './Login.css';

const LoginScreen = () => {
  return (
    <div className="card">
      <div>
        <h1>基本資料</h1>
        <img src="https://placekitten.com/120/125" width="100" height="100" alt="你的頭像" />
      </div>
      <div>
        <p>請輸入以下資訊</p>
        <div style={{borderWidth: 10, backgroundColor: '#CCCCCC', width: '100%', height: '2px'}} />
      </div>
      <form action="">
        <div>
          <label for="name">名字</label>
          <input type="text" placeholder="請輸入名字" maxlength="10" />
        </div>
        <div>
          <label for="age">年齡</label>
          <input type="number" id='age' placeholder="0" min="0" max="30" />
        </div>
        <div>
          花色
          <select name="flowers">
            <option value="0">虎斑</option>
            <option value="1">三花</option>
            <option value="2">玳瑁</option>
            <option value="3">黑</option>
            <option value="4">白</option>
            <option value="5">橘</option>
          </select>
        </div>
        <div>
          <label for="male">性別</label>
          <input type="radio" id="male" name="gender" value="male" />
          <label for="male">男生</label>
          <input type="radio" id="female" name="gender" value="female" />
          <label for="female">女生</label>
          <input type="radio" id="other" name="g4gender" value="other" />
          <label for="other">其他</label>
        </div>


        <button type="submit">送出</button>
        <button type="reset">重新輸入</button><br />

        <a href="https://www.w3schools.com" target="_blank"><small>尋求幫助</small></a>
      </form>
    </div>
  );
};

export default (LoginScreen);
