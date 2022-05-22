import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
import Appointment from "./pages/Appointment/Appointment";
import Login from "./pages/Auth/Login";
import Registration from "./pages/Auth/Registration";
import RequireAuth from "./pages/Auth/RequireAuth";
import Contact from "./pages/Home/Contact";
import Home from "./pages/Home/Home";
import Reviews from "./pages/Reviews/Reviews";

import Navber from "./pages/Shared/Navber";
import NotFound from "./pages/Shared/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/dashboard/Dashboard";
import MyAppointment from "./pages/dashboard/MyAppointment";
import MyReview from "./pages/dashboard/MyReview";
import Users from "./pages/dashboard/Users";
import RequireAdmin from "./pages/dashboard/RequireAdmin";
import AddDoctors from "./pages/dashboard/AddDoctors";
import ManegeDoctors from "./pages/dashboard/ManegeDoctors";
import Payment from "./pages/dashboard/Payment";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navber />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/appoinment"element={<RequireAuth><Appointment /></RequireAuth>}></Route>
        <Route path="/dashboard"element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyAppointment />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="users" element={<RequireAdmin><Users /></RequireAdmin>}></Route>
          <Route path="payment/:id" element={<Payment/>}></Route>
          <Route path="adddoctor" element={<RequireAdmin><AddDoctors/></RequireAdmin>}></Route>
          <Route path="managedoctor" element={<RequireAdmin><ManegeDoctors/></RequireAdmin>}></Route>
        </Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="registration" element={<Registration />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
