import React from "react";


const DoctorRow = ({ doctor, index, refetch,setDeleteDoctor }) => {
  //    console.log(doctor)
  const { name, img, speciality} = doctor;
  
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
      <label onClick={()=>setDeleteDoctor(doctor)} for="delete-confirm" class="btn modal-button">remove</label>
        
      </td>
    </tr>
  );
};

export default DoctorRow;
