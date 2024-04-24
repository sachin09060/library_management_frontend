import React from 'react'
import './SignIn.css'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function SignIn() {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Sign-In</h1>
            <div className="input-box">
                <input type="text" placeholder='User'  required/>
                <FaUser className='icon' />
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password'  required/>
                <RiLockPasswordFill className='icon' />
            </div>
            <div className="remember-forgot">
                <label ><input type="checkbox" />Remember me</label>
                <a href="/ForgotPassword">Forgot password?</a>
            </div>
            <button type='submit'>SignIn</button>
            <div className="register-link">
                <p>Dont't have an account? <a href="/">Register</a></p>
            </div>
        </form>
    </div>
  )
}

