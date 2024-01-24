import React from 'react';
import './Input.css';



const Input = ({ name, value, setValue, label, placeholder, type = 'text' }) => {


  return (
    <div className='input-container'>
      {label && <label htmlFor={name}>{label}</label>}
      <input type={type} className='form-input' name={name} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};


export default Input;
