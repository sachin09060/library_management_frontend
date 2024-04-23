import React from 'react'
// import ResponsiveDrawer from './Drawer2'
import ResponsiveAppBar from '../NavBar'
import CarouselsHome from '../CarouselsHome'
import ButtonEx from '../Buttons'


export default function Home() {
  return (
    <div>
      <ResponsiveAppBar />
      <CarouselsHome />
      <div style={{marginTop:"20px"}}><p>This is only for Admin </p></div>
      <ButtonEx/>

      {/* <ResponsiveDrawer/> */}
    </div>
  )
}
