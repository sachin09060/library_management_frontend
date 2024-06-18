
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
import AboutUs from './componets/homePage/AboutUs';
import ContactForm from './componets/homePage/ContatUs';
import AboutUs2 from './componets/homePage/AboutUs2';
import ContactForm2 from './componets/homePage/ContatUs2';
import ManageBooks from './componets/admin/ManageBooks';
import ManageUsers from './componets/admin/ManageUsers';
import ManageIssuedBooks from './componets/admin/ManageIssuedBooks';
import ManageRequestedBooks from './componets/admin/ManageRequestedBooks';
import Main2 from './componets/homePage/Main2';
import BookTabs2 from './componets/books/BookTabs2';
import Cart from './componets/general/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/main2' element={<Main2 />} />
          <Route path='/adminDash' element={<AdminDash />} />
          <Route path='/adminSignIn' element={<AdminSignIn />} />
          <Route path='/UserSignIn' element={<UserSignIn />} />
          <Route path='/UserSignUp' element={<RegisterPage />} />
          <Route path='/Forgot' element={<ForgotPassword />} />
          <Route path='/BooksGallery' element={<BookTabs />} />
          <Route path='/BooksGallery2' element={<BookTabs2 />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contactUs2' element={<ContactForm2 />} />
          <Route path='/about2' element={<AboutUs2 />} />
          <Route path='/contactUs' element={<ContactForm />} />
          <Route path='/manageBooks' element={<ManageBooks />} />
          <Route path='/manageUsers' element={<ManageUsers />} />
          <Route path='/manageIssuedBooks' element={<ManageIssuedBooks />} />
          <Route path='/manageRequestedBooks' element={<ManageRequestedBooks />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;