import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonial from './Testimonial';
import TreatMentService from './TreatMentService';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Info/>
            <Services/>
            <TreatMentService/>
            <MakeAppoinment/>
            <Testimonial/>
        </div>
    );
};

export default Home;