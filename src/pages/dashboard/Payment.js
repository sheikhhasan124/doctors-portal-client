import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51L2BQ1CJu1xjIM5SfbvN8CfqrmqNojggr9Hhfd7h5J6JZJOHYie63yQd924XwA9i40wVLzXACh8TAaAOtGFjTJWt00zaTjsVFE');

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
//   console.log(appoinment)
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
      <Elements stripe={stripePromise}>
        <CheckoutForm/>
      </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
