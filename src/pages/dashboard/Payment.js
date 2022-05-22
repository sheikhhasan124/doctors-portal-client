import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  const { data: appoinment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  console.log(appoinment)
  return (
    <div>
      <h2>please pay your bill {id}</h2>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <p className="text-2xl font-bold text-green-500">hello {appoinment.patientName}</p>
          <h2 class="card-title">pay for {appoinment.treatment} </h2>
          <p>we will see you on {appoinment.date} at {appoinment.slot} </p>
         <p>please pay ${appoinment.price}</p>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
          <h2 class="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
