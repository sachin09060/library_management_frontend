// App.js

import { Book } from 'react-bootstrap-icons';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './Componets/Dashbord/Home';
// import Dashbord from './Componets/Dashbord/Drawer2'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AdminSignIn from './Componets/login/AdminSignIn';
// import UserSignIn from './Componets/login/SignIn';
// import RegisterPage from './Componets/login/RegisterPage';
// import ForgotPassword from './Componets/login/ForgotPassword';

import Bookcard from './Componets/UserDashbord/cards/Bookcard';
import Usercards from './Componets/UserDashbord/cards/Usercards'





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
      <Bookcard/>
      <Usercards/>
      
    </div>
  );
}

export default App;
