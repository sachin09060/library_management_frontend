
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminSignIn from './componets/admin/AdminSignIn';
import UserSignIn from './componets/user/SignIn';
import RegisterPage from './componets/general/RegisterPage';
import ForgotPassword from './componets/general/ForgotPassword';
import Main from './componets/homePage/Main';
import BookTabs from './componets/books/BookTabs';
import AdminDash from './componets/admin/AdminDash'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/adminDash' element={<AdminDash />} />
          <Route path='/adminSignIn' element={<AdminSignIn />} />
          <Route path='/UserSignIn' element={<UserSignIn />} />
          <Route path='/UserSignUp' element={<RegisterPage />} />
          <Route path='/Forgot' element={<ForgotPassword />} />
          <Route path='/BooksGallery' element={<BookTabs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
