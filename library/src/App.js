// App.js

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './Componets/Dashbord/Home';
// import Dashbord from './Componets/Dashbord/Drawer2'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AdminSignIn from './Componets/login/AdminSignIn';
// import UserSignIn from './Componets/login/SignIn';
// import RegisterPage from './Componets/login/RegisterPage';
// import ForgotPassword from './Componets/login/ForgotPassword';
// import UserNavBar from './Componets/UserDashboard/Cards/UserNavBar'
// import UserDetails from './Componets/UserDashboard/Cards/UserDetails'
// import Books from './Componets/UserDashboard/Cards/Books'
import GridBooks from './Componets/UserDashboard/Cards/BooksPage'

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Dashbord />} />
          <Route path='/adminSignIn' element={<AdminSignIn />} />
          <Route path='/UserSignIn' element={<UserSignIn />} />
          <Route path='/UserSignUp' element={<RegisterPage />} />
          <Route path='/Forgot' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter> */}
      {/* <UserNavBar/> */}
      {/* <UserDetails/> */}
      {/* <Books/> */}
      <GridBooks/>
    </div>
  );
}

export default App;
