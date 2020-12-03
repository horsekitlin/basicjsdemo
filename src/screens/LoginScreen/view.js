import React, { useState } from "react";
import './Login.css';
import * as yup from 'yup';

const INITIAL_DATA = {
  name: '',
  age: '',
  color: 0,
  gender: 'other'
};

const INITIAL_ERRORS = {
  name: '',
  age: '',
  color: '',
  gender: ''
};

const loginSchema = yup.object().shape({
  name: yup.string().matches(/^[\u4e00-\u9fa5_a-zA-Z]+$/, '必須是中英的組合').required('name 不可為空'),
  age: yup.number().typeError('必須是一個數字').positive('必須為整數').max(100, '必須小於 100 的數字').min(0, '必須大於0的數字'),
  color: yup.string().matches(/[0|1|2|3|4|5]/, 'color 選擇錯誤').required(),
  gender: yup.string().matches(/[male|female|other]/, '性別 選擇錯誤').required(),
});

const handleSubmit = (formData, setErrors) => async (e) => {
  try {
    e.preventDefault();
    await loginSchema.validate(formData, { abortEarly: false });
    alert(`submit success: ${JSON.stringify(formData)}`);
  } catch (error) {
    const errors = error.inner.reduce((result, validateError) => {
      const { path, errors } = validateError;
      const [message] = errors;
      return { ...result, [path]: message };
    }, INITIAL_ERRORS);
    setErrors(errors);
  }
};

const LoginScreen = () => {
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [errors, setErrors] = useState({ ...INITIAL_ERRORS });
  return (
    <div className="card">
      <div>
        <h1>基本資料</h1>
        <img src="https://placekitten.com/120/125" width="100" height="100" alt="你的頭像" />
      </div>
      <div>
        <p>請輸入以下資訊</p>
        <div style={{ borderWidth: 10, backgroundColor: '#CCCCCC', width: '100%', height: '2px' }} />
      </div>
      <form onSubmit={handleSubmit(formData, setErrors)}>
        <div>
          <label htmlFor="name">名字</label>
          <input
            type="text"
            placeholder="請輸入名字"
            maxLength="10"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
          />
          <p style={{color: 'red', fontSize: 14, fontWeight: 'normal'}}>{errors.name}</p>
        </div>
        <div>
          <label htmlFor="age">年齡</label>
          <input
            type="number"
            id='age'
            placeholder="0"
            min="0"
            max="100"
            value={formData.age}
            onChange={e => setFormData({ ...formData, age: e.target.value })}
          />
          <p>{errors.age}</p>
        </div>
        <div>
          花色
          <select value={formData.color} onChange={e => setFormData({ ...formData, color: e.target.value })}>
            <option value="0">虎斑</option>
            <option value="1">三花</option>
            <option value="2">玳瑁</option>
            <option value="3">黑</option>
            <option value="4">白</option>
            <option value="5">橘</option>
          </select>
          <p>{errors.color}</p>
        </div>
        <div>
          <label htmlFor="male">性別</label>
          <input type="radio" id='male' onChange={() => setFormData({ ...formData, gender: 'male' })} checked={"male" === formData.gender} />
          <label htmlFor="male">男生</label>
          <input type="radio" id='female' onChange={() => setFormData({ ...formData, gender: 'female' })} checked={"female" === formData.gender} />
          <label htmlFor="female">女生</label>
          <input type="radio" id='other' onChange={() => setFormData({ ...formData, gender: 'other' })} checked={"other" === formData.gender} />
          <label htmlFor="other">其他</label>
          <p>{errors.gender}</p>
        </div>


        <button type="submit">送出</button>
        <button type="reset">重新輸入</button><br />

        <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer"><small>尋求幫助</small></a>
      </form>
    </div>
  );
};

export default (LoginScreen);
