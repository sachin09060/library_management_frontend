
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
import NewsBlog from './componets/homePage/NewsBlog';
import AboutUs from './componets/homePage/AboutUs';
import ContactForm from './componets/homePage/ContatUs';
import ManageBooks from './componets/admin/ManageBooks';
import ManageUsers from './componets/admin/ManageUsers';
import ManageIssuedBooks from './componets/admin/ManageIssuedBooks';
import ManageRequestedBooks from './componets/admin/ManageRequestedBooks';

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
          <Route path='/news' element={<NewsBlog />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contactUs' element={<ContactForm />} />
          <Route path='/manageBooks' element={<ManageBooks />} />
          <Route path='/manageUsers' element={<ManageUsers />} />
          <Route path='/manageIssuedBooks' element={<ManageIssuedBooks />} />
          <Route path='/manageRequestedBooks' element={<ManageRequestedBooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
