import React from 'react'
import './SignIn.css'


export default function RegisterPage() {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Register Here</h1>
            <div className="input-box">
                <input type="text" placeholder='First Name'/>
            </div>

            <div className="input-box">
                <input type="text" placeholder='Last Name'/>
            </div>

            <div className="input-box">
                <input type="text" placeholder='Email'/>
            </div>


            <div className="input-box">
                <input type="password" placeholder='Password'/>
                
            </div>
            <button type='submit'>Create Account</button>
            <div className="create-acc">
                <p>have an account<a href="/Signin"> Sign-In</a></p>
            </div>

        </form>

    </div>
  )
}
