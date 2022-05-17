import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';
import {useNavigate}from 'react-router-dom'
import { signOut } from 'firebase/auth';

const MyAppointment = () => {
    const [user]=useAuthState(auth)
    const [appoinments, setAppoinment]=useState([])
    const navigate = useNavigate()

    // akane user.email dele sei user ar appoinment asbe.,,bt onno user.gmail dele o data asbe jaha kammo na,,
    // sei jonno user.email ar jwt check kore tar por data dete hobe
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/booking?patient=${user.email}`,{
              method:'GET',
              headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
              }
            })
        .then(res=> {
          console.log(res)
          if(res.status === 401 || res.status === 403){
            signOut(auth)
            localStorage.removeItem('accessToken')
              navigate('/')
          }
          // jkon multiline korbo tokon retur korte hobe

         return res.json()
        })
        .then(data=> setAppoinment(data))
        }
     },[user])
   
    return (
        <div>
            <h2>my appoinments{appoinments.length}</h2>

            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
     {
       appoinments.map((a,index)=> <tr>
        <th>{index + 1}</th>
        <td>{a.patientName}</td>
        <td>{a.date}</td>
        <td>{a.slot}</td>
        <td>{a.treatment}</td>
      </tr>)  
     }
       
     
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;