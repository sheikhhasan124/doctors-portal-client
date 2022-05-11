import React from 'react';
import fotterbg from '../../assets/images/footer.png'

const Fotter = () => {
    return (
        <section className=' bg-no-repeat w-120 h-full bg-left-top' style={{
            background:`url(${fotterbg})`
  }}>
            <div>
            <footer  class="footer p-10  text-slate-500 px-40 ">
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
           </footer>
            </div>
         <p className='text-center mt-20 mb-12 text-black text-xl'>Copy right all reserved</p>
        </section>
    );
};

export default Fotter;