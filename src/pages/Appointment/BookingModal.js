import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({date, treatment,setTreatment}) => {
    const {name,slot,_id}=treatment;

    const handleBooking=(event)=>{
        event.preventDefault()
        const slot = event.target.slt.value;
        console.log(_id,name,slot)
        setTreatment(null)
    }
    return (
        <div>
 <input type="checkbox" id="booking-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg text-secondary text-center mb-3">{name}</h3>
    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
    <input type="text" disabled value={format(date,'PP')} class="input input-bordered w-full max-w-xs" />
    <select name='slt' class="select select-bordered w-full max-w-xs">
         {slot.map(slt=><option value={slt}>{slt}</option>)}
        
     </select>
    <input type="text" placeholder="name" name="name" class="input input-bordered w-full max-w-xs" />
    <input type="email" placeholder="email" name='email' class="input input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Phone" name='phone' class="input input-bordered w-full max-w-xs" />
    <input type="submit" value="SUBMIT" class=" bg-secondary btn  text-white input-bordered w-full max-w-xs" />
    </form>
    
  </div>
</div>
        </div>
    );
};

export default BookingModal;