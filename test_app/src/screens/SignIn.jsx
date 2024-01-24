import React, { useState } from 'react';
import "./SignIn.css"
import Input from '../components/inputs/Input';
import Button from '../components/Button/Button';
import { loginUser } from '../api';
import appStorage from "../helpers/appStorage";

const Storage = appStorage();

  const SignIn = () => {

    const [form,setForm] = useState({
      email: '',
      password: '',
    })
    const handleInputChange = (key,value) =>{
      setForm((prev) => {
        return {...prev,[key]:value}
      })
    }
    const handleSignIn = () => {
      loginUser(form).then((res) => {
        if (res.statusCode !== 200)
          alert(res.message ? res.message : res.error)
        else {
            Storage.setToken(res.access_token);
            Storage.setUser(res.user);
            window.location.replace('/home');
        }
      });
    };
  
    return (
      <div className="sign-in-container">
        <div className="box">
          <h1>Sign In</h1>  
            <div className="user">
                <Input name={'email'} value={form.email} setValue={(value) => handleInputChange('email', value)} placeholder={'Email'} />
                <Input name={'password'} type='password' value={form.password} setValue={(value) => handleInputChange('password', value)} placeholder={'Password'} />
            </div>
            <div className='text-w-center'>
              <Button type="sign-up" onPress={handleSignIn} text={"Sign In"}/>
            </div>
        </div>
      </div>
    );
  };
  
  export default SignIn;