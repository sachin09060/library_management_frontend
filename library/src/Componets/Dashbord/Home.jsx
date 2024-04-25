import React from 'react'
import ResponsiveAppBar from '../NavBar'
import CarouselsHome from '../CarouselsHome'
import UserSignInBtn from './UserSignInBtn'


export default function Home() {
  return (
    <div>
      <ResponsiveAppBar />
      <CarouselsHome />
      <div style={{marginTop:"20px"}}><p>Click Here to SignIn </p></div>
      <UserSignInBtn/>
    </div>
  )
}
