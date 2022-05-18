import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DoctorRow from "./DoctorRow";

const ManegeDoctors = () => {
  const { data: doctors, isLoading,refetch} = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctors", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h3 className="text-2xl text-purple-600">Manage doctor{doctors.length}</h3>
      <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>avater</th>
        <th>Name</th>
        <th>Speciality</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
       {doctors.map((doctor,index)=><DoctorRow index={index} key={doctor._id} refetch={refetch} doctor={doctor}>

       </DoctorRow>)}
    </tbody>
  </table>
</div>
    </div>
  );
};

export default ManegeDoctors;
