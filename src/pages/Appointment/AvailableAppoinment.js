import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppoinment = ({date}) => {
    const [services, setservices]=useState([])
    useEffect(()=>{
    fetch('services.json')
    .then(res=>res.json())
    .then(data=>setservices(data))
    },[])
    return (
        <div>
            <h2 className='text-xl text-primary text-center'>Available Appoinment {format(date,'PP')}</h2>
            <div>
                {services.map(service=><Service key={service._id} service={service}/>)}
            </div>
        </div>
    );
};

export default AvailableAppoinment;