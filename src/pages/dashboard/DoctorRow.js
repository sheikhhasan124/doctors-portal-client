import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch }) => {
  //    console.log(doctor)
  const { name, img, speciality,email} = doctor;
    const doctorDelete=email=>{
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
            }
        })
    }
  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>
        {
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img src={img} alt={img}/>
            </div>
          </div>
        }
      </td>
      <td>{name}</td>
      <td>{speciality}</td>
      <td>
        <button onClick={()=>doctorDelete(email)} class="btn btn-outline btn-warning">remove</button>
      </td>
    </tr>
  );
};

export default DoctorRow;
