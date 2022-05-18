import React from "react";
import { toast } from 'react-toastify';

const UserRow = ({user,index,refetch}) => {
  const {_id,email,role}=user;

  const makeAdmin=()=>{
    // backend a token patate metho bolte hoi
    fetch(`http://localhost:5000/user/admin/${email}`,{
      method:'PUT',
      headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res=>{return res.json()})
    .then(data=>{
      refetch()
      toast.success('successfully made an admin')
     
    })
  }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
      <td><button class="btn btn-xs">Remove</button></td>
    </tr>
  );
};

export default UserRow;
