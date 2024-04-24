import React from 'react'
import './SignIn'
import Button from 'react-bootstrap/Button';



export default function ForgotPassword() 
{
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Forgot Password</h1>
            <div className="input-box">
                <input type="password" placeholder='New Password'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Confirm Password'/>
            </div>
            <div className="button">
                <Button to="/SigIn" variant="primary" size="sm">
                    Save
                </Button>{' '}
            </div>
        </form>
    </div>
  )
}
