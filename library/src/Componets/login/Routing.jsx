import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import SignIn from './SignIn';
import RegisterPage from './RegisterPage';
import ForgotPassword from './ForgotPassword';
import './SignIn.css'

export default function Routing() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RegisterPage/>}/>
                <Route path='/Signin' element={<SignIn/>}/>
                <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
