import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appoinment from '../../assets/images/appointment.png'

const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }} 
       className='flex justify-center items-center mt-24 px-4'>
            <div className='flex-1 mt-[-160px] hidden lg:block'>
               <img src={doctor} alt="" />
            </div>
            <div className='flex-1'>
             <h3 className='text-xl text-primary font-bold '>Appoinment</h3>
             <h2 className=' text-3xl text-white py-2'>Make an appointment Today</h2>
             <p className='text-white  lg:text-2xl text-xl py-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
             <button className="btn-gradient">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppoinment;