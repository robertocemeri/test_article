import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SignUp.css"
import Input from '../components/inputs/Input';
import Button from '../components/Button/Button';
import { registerUser } from "../api";
import appStorage from "../helpers/appStorage";

const Storage = appStorage();

  const SignUp = () => {
    const navigate = useNavigate();

    const [form,setForm] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
    const handleInputChange = (key,value) =>{
      setForm((prev) => {
        return {...prev,[key]:value}
      })
    }

    const handleSignUp = () => {
      if(form.password === form.confirmPassword){
        registerUser(form).then((res) => {
          if (res.statusCode !== 200)
            alert(res.message ? res.message : res.error)
          else {
            Storage.setToken(res.access_token);
            Storage.setUser(res.user);
            window.location.replace('/home');
          }
        });
      }else{
        alert('Passwords not match!');
      }
    };
    const handleSignInButtonClick = () => {
      // Redirect to login form
      navigate('/login');
    };
  
    return (
      <div className="sign-up-container">
        <div className="box">
          <h1>Sign Up</h1>  
            <div className="user">
                <Input name={'name'} value={form.name} setValue={(value) => handleInputChange('name', value)} placeholder={'Full Name'} />
                <Input name={'email'} value={form.email} setValue={(value) => handleInputChange('email', value)} placeholder={'Email'} />
                <Input name={'password'} type="password" value={form.password} setValue={(value) => handleInputChange('password', value)} placeholder={'Password'} />
                <Input name={'confirmPassword'} type="password" value={form.confirmPassword} setValue={(value) => handleInputChange('confirmPassword', value)} placeholder={'Confirm Password'} />
            </div>
            <div  className='text-w-center' >
              <Button type="sign-up" onPress={handleSignUp} text={"Sign Up"}/>
              <span> or </span>
              <Button type="text" onPress={handleSignInButtonClick} text={"Sign in"}/>
            </div>
        </div>
      </div>
    );
  };
  
  export default SignUp;