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
 <input type="checkbox" id="booking-modal"className="modal-toggle" />
<div className ="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label for="booking-modal"className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-secondary text-center mb-3">{name}</h3>
    <form onSubmit={handleBooking}className='grid grid-cols-1 gap-3 justify-items-center'>
    <input type="text" disabled value={format(date,'PP')} className="input input-bordered w-full max-w-xs" />
    <select name='slt'className="select select-bordered w-full max-w-xs">
         {slot.map(slt=><option value={slt}>{slt}</option>)}
        
     </select>
    <input type="text" placeholder="name" name="name"className="input input-bordered w-full max-w-xs" />
    <input type="email" placeholder="email" name='email'className="input input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Phone" name='phone'className="input input-bordered w-full max-w-xs" />
    <input type="submit" value="SUBMIT"className= "bg-secondary btn  text-white input-bordered w-full max-w-xs" />
    </form>
    
  </div>
</div>
        </div>
    );
};

export default BookingModal;