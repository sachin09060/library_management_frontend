import React from 'react'
import './SignIn.css'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function AdminSignIn() {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Admin</h1>
            <div className="input-box">
                <input type="text" placeholder='Id'/>
                <FaUser  className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password'/>
                <RiLockPasswordFill  className='icon'/>
            </div>
            <div className="remember-forgot">
                <label htmlFor=""><input type="checkbox" />Remember Me</label>
                <a href="#">Forgot Password?</a>
            </div>
            <button  type='submit'>SignIn</button>

        </form>

    </div>
  )
}
