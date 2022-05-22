import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deleteDoctor,refetch,setDeleteDoctor}) => {
    const {name,email}=deleteDoctor;
    const doctorDelete=()=>{
        fetch(`http://localhost:5000/doctors/${email}`,{
          method:'DELETE',
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount){
                toast.success('doctor deleted')
                refetch()
                setDeleteDoctor(null)
            }
        })
    }
    return (
        <div>
<input type="checkbox" id="delete-confirm" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg text-red-500">are you sure to delete {name} doctor!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="delete-confirm" class="btn">cansel</label>
      <button onClick={()=>doctorDelete()} class="btn btn-outline btn-warning">remove</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DeleteConfirmModal;