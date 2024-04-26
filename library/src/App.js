
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminSignIn from './Componets/Admin/AdminSignIn';
import UserSignIn from './Componets/User/SignIn';
import RegisterPage from './Componets/General/login/RegisterPage';
import ForgotPassword from './Componets/General/login/ForgotPassword';
import AdminDash from './Componets/Admin/AdminDash';
import Main from './Componets/HomePage/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/admin' element={<AdminDash />} />
          <Route path='/adminSignIn' element={<AdminSignIn />} />
          <Route path='/UserSignIn' element={<UserSignIn />} />
          <Route path='/UserSignUp' element={<RegisterPage />} />
          <Route path='/Forgot' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
