import React from 'react';
import { Link } from 'react-router-dom';
import fotterbg from '../../assets/images/footer.png'

const Fotter = () => {
    return (
        <section  className='mt-12'>
            <footer style={{
                background: `url(${fotterbg})`, backgroundSize:'cover',
            }}className="p-10  text-slate-500 px-40 bg-top">

            <div  className='footer'>
            <div>
                <span className="footer-title">Services</span> 
                <Link to="" className="link link-hover">Branding</Link>
                <Link to="" className="link link-hover">Design</Link>
                <Link to="" className="link link-hover">Marketing</Link>
                <Link to="" className="link link-hover">Advertisement</Link>
            </div> 
            <div>
                <span className="footer-title">Company</span> 
                <Link to="" className="link link-hover">About us</Link>
                <Link to="" className="link link-hover">Contact</Link>
                <Link to="" className="link link-hover">Jobs</Link>
                <Link to="" className="link link-hover">Press kit</Link>
            </div> 
            <div>
                <span className="footer-title">Legal</span> 
                <Link to="" className="link link-hover">Terms of use</Link>
                <Link to="" className="link link-hover">Privacy policy</Link>
                <Link to="" className="link link-hover">Cookie policy</Link>
            </div>
            </div>
             <p  className='text-center mt-24 mb-12 text-black text-xl'>Copy right all reserved</p>
           </footer>
            
        </section>
    );
};

export default Fotter;