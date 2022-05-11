import React from 'react';

const Service = ({service}) => {
    const {name, slot}=service;
   
    return (
        <div class="card la:max-w-lg bg-base-100 shadow-xl text-center">
  <div class="card-body">
    <h2 class="text-xl font-bold text-secondary">{name}</h2>
    <p>{slot.length>0
      ? <span>{slot[0]}</span>
      : <span className='text-red-500'>Try another date</span>
    }</p>
    <p>{slot.length} {slot.length>1? 'Spaces':'space'} available</p>
    <div class="card-actions justify-center">
      <button disabled={slot.length===0} class="btn-gradient ">Book Appointment</button>
    </div>
  </div>
</div>
    );
};

export default Service;