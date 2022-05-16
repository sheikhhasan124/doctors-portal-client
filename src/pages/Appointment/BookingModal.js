import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase_init';
import { useAuthState } from 'react-firebase-hooks/auth';

const BookingModal = ({date, treatment,setTreatment}) => {
  const [user, loading, error] = useAuthState(auth);
    const {name,slot,_id}=treatment;
    const formattedDate = format(date, 'PP')
    const handleBooking=(event)=>{
        event.preventDefault()
        const slot = event.target.slt.value;

        const booking = {
          treatmentId:_id,
          treatment:name,
          date:formattedDate,
          slot,
          patient:user.email,
          patientName:user.displayName,
          phone: event.target.phone.value
        }
        
        // console.log(_id,name,slot)
        setTreatment(null)
    }
    return (
        <div>
 <input type="checkbox" id="booking-modal"className="modal-toggle" />
<div className ="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label htmlFor="booking-modal"className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-secondary text-center mb-3">{name}</h3>
    <form onSubmit={handleBooking}className='grid grid-cols-1 gap-3 justify-items-center'>
    <input type="text" disabled value={format(date,'PP')} className="input input-bordered w-full max-w-xs" />
    <select name='slt'className="select select-bordered w-full max-w-xs">
         {slot.map((slt, index)=><option key={index} value={slt}>{slt}</option>)}
        
     </select>
    <input type="text" value={user?.displayName} name="name"className="input input-bordered w-full max-w-xs" />
    <input type="email" value={user?.email} name='email'className="input input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Phone" name='phone'className="input input-bordered w-full max-w-xs" />
    <input type="submit" value="SUBMIT"className= "bg-secondary btn  text-white input-bordered w-full max-w-xs" />
    </form>
    
  </div>
</div>
        </div>
    );
};

export default BookingModal;