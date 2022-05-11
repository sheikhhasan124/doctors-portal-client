
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about/About';
import Appointment from './pages/Appointment/Appointment';
import Login from './pages/Auth/Login';
import Registration from './pages/Auth/Registration';
import Contact from './pages/Home/Contact';
import Home from './pages/Home/Home';
import Reviews from './pages/Reviews/Reviews';
import Fotter from './pages/Shared/Fotter';
import Navber from './pages/Shared/Navber';
import NotFound from './pages/Shared/NotFound';

function App() {
  return (
    <div>
      <Navber/>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/appoinment" element={<Appointment/>}></Route>
        <Route path="/reviews" element={<Reviews/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="registration" element={<Registration/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Fotter/>
    </div>
  );
}

export default App;
