
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
import AboutUs2 from './componets/homePage/AboutUs2';
import ContactForm2 from './componets/homePage/ContatUs2';
import ManageBooks from './componets/admin/ManageBooks';
import ManageUsers from './componets/admin/ManageUsers';
import ManageIssuedBooks from './componets/admin/ManageIssuedBooks';
import ManageRequestedBooks from './componets/admin/ManageRequestedBooks';
import ManageBooks2 from './componets/admin/ManageBooks2';
import ManageUsers2 from './componets/admin/ManageUsers2';
import ManageIssuedBooks2 from './componets/admin/ManageIssuedBooks2';
import ManageRequestedBooks2 from './componets/admin/ManageRequestedBooks2';
import Main2 from './componets/homePage/Main2';

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
          <Route path='/news' element={<NewsBlog />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contactUs2' element={<ContactForm2 />} />
          <Route path='/about2' element={<AboutUs2 />} />
          <Route path='/contactUs' element={<ContactForm />} />
          <Route path='/manageBooks' element={<ManageBooks />} />
          <Route path='/manageBooks2' element={<ManageBooks2 />} />
          <Route path='/manageUsers' element={<ManageUsers />} />
          <Route path='/manageUsers2' element={<ManageUsers2 />} />
          <Route path='/manageIssuedBooks' element={<ManageIssuedBooks />} />
          <Route path='/manageIssuedBooks2' element={<ManageIssuedBooks2 />} />=
          <Route path='/manageRequestedBooks' element={<ManageRequestedBooks />} />
          <Route path='/manageRequestedBooks2' element={<ManageRequestedBooks2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;