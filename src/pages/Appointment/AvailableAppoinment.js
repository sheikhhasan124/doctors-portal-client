import { format } from 'date-fns';
import { useQuery } from 'react-query'
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../Shared/Loading';

const AvailableAppoinment = ({date}) => {
    // const [services, setservices]=useState([])
    const [treatment, setTreatment]=useState(null)
   const formattedDate = format(date, 'PP')
   const {data:services,isLoading,refetch}= useQuery(['available',formattedDate],()=> fetch(`http://localhost:5000/available?date=${formattedDate}`)
   .then(res=>res.json())
   )
    // useEffect(()=>{
    // fetch(`http://localhost:5000/available?date=${formattedDate}`)
    // .then(res=>res.json())
    // .then(data=>setservices(data))
    // },[])
    if(isLoading){
        return <Loading/>
    }
    return (
        <div className='mt-12'>
            <h2 className='text-xl text-secondary text-center'>Available Appoinment {format(date,'PP')}</h2>
            <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map(service=><Service key={service._id} setTreatment={setTreatment} service={service}/>)}
            </div>
            {treatment&& <BookingModal
             date={date}
             treatment={treatment}
             refetch = {refetch}
             setTreatment={setTreatment}/>}
        </div>
    );
};

export default AvailableAppoinment;