import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';
import useAdmin from '../../Hook/useAdmin';

const Dashboard = () => {
  const [user]=useAuthState(auth)
  const [admin]=useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
  <input id="dashbord-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
    {/* <!-- Page content here --> */}
    <h2 className='text-3xl text-orange-500 font-bold'>wellcome to  Dashbord</h2>
    <Outlet/>
    
  
  </div> 
  <div class="drawer-side">
    <label for="dashbord-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboard">My Appointment</Link></li>
      <li><Link to="/dashboard/review">My Review</Link></li>
      {admin && <li><Link to="/dashboard/users">All Users</Link></li>}
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;