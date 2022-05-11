import React from 'react';
import fotterbg from '../../assets/images/footer.png'

const Fotter = () => {
    return (
        <section className='mt-12'>
           
            <footer style={{
                background: `url(${fotterbg})`, backgroundSize:'cover',
            }} class="p-10  text-slate-500 px-40 bg-top">

            <div className='footer'>
            <div>
                <span class="footer-title">Services</span> 
                <a class="link link-hover">Branding</a>
                <a class="link link-hover">Design</a>
                <a class="link link-hover">Marketing</a>
                <a class="link link-hover">Advertisement</a>
            </div> 
            <div>
                <span class="footer-title">Company</span> 
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Jobs</a>
                <a class="link link-hover">Press kit</a>
            </div> 
            <div>
                <span class="footer-title">Legal</span> 
                <a class="link link-hover">Terms of use</a>
                <a class="link link-hover">Privacy policy</a>
                <a class="link link-hover">Cookie policy</a>
            </div>
            </div>
             <p className='text-center mt-24 mb-12 text-black text-xl'>Copy right all reserved</p>
           </footer>
            
        </section>
    );
};

export default Fotter;