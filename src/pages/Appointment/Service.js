import React from 'react';

const Service = ({service,setTreatment}) => {
    const {name, slot,price}=service;
   
    return (
        <div className="card la:max-w-lg bg-base-100 shadow-xl text-center">
  <div className="card-body">
    <h2 className="text-xl font-bold text-secondary">{name}</h2>
    <p>{slot.length>0
      ? <span>{slot[0]}</span>
      : <span className='text-red-500'>Try another date</span>
    }</p>
    <p>$ price: {price}</p>
    <p>{slot.length} {slot.length>1? 'Spaces':'space'} available</p>
    <div className="card-actions justify-center">
      <label
       htmlFor="booking-modal" 
       disabled={slot.length===0} 
       onClick={()=>setTreatment(service)}
     className="btn modal-button btn-gradient">Booking Appointment</label>
    </div>
  </div>
</div>
    );
};

export default Service;