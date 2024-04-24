// App.js

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Componets/Dashbord/Home';
import ResponsiveDrawer from './Componets/Dashbord/Drawer2'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<ResponsiveDrawer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
