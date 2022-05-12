import React from 'react';
import appoinment from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }}className='w-100 h-100 text-center py-5 mt-24'>
            <div>
             <div className='text-center'>
             <h2 className='text-primary text-xl font-bold capitalize'>contact us</h2>
            <h2 className='text-3xl text-white mb-4'>Stay connected with us</h2>
             </div>
            <form>
                <div><input className='p-3 w-[450px] my-2 rounded-md ' type="email" name="email" placeholder='email' id="" /></div>
                <div><input className='p-3 w-[450px] my-2 rounded-md ' type="text" name="text" placeholder='text' id="" /></div>
                <div><textarea className='p-3 w-[450px] my-2 rounded-md ' name="" id=""  rows="5" placeholder='your message'></textarea></div>
                <input type="submit"className='btn-gradient' value="Submit" />
            </form>
            </div>
        </section>
    );
};

export default Contact;