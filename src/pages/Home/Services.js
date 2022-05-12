import React from 'react';
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const Services = [
        {
            _id:1,
            name:'Cavity Filling',
            desc:'',
            img:cavity
        },
        {
            _id:2,
            name:'Fluoride Treatment',
            desc:'',
            img:fluoride
        },
        {
            _id:3,
            name:'Teeth Whitening',
            desc:'',
            img:whitening
        }
    ]
    return (
        <div  className='my-20'>
            <div  className='text-center'>
                <h3  className='text-primary font-bold text-xl'>our services</h3>
                <h4  className='text-3xl'>Services We Provided</h4>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {Services.map(service=><Service key={service._id} service={service}></Service>)}
            </div>
             
        </div>
    );
};

export default Services;