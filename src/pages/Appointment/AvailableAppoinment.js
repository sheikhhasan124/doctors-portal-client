import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppoinment = ({date}) => {
    const [services, setservices]=useState([])
    const [treatment, setTreatment]=useState(null)

    useEffect(()=>{
    fetch('http://localhost:5000/service')
    .then(res=>res.json())
    .then(data=>setservices(data))
    },[])
    return (
        <div className='mt-12'>
            <h2 className='text-xl text-secondary text-center'>Available Appoinment {format(date,'PP')}</h2>
            <div class ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map(service=><Service key={service._id} setTreatment={setTreatment} service={service}/>)}
            </div>
            {treatment&& <BookingModal date={date} treatment={treatment}
             setTreatment={setTreatment}/>}
        </div>
    );
};

export default AvailableAppoinment;