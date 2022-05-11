import React from 'react';
import Fotter from '../Shared/Fotter';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonial from './Testimonial';
import TreatMentService from './TreatMentService';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <TreatMentService/>
            <MakeAppoinment/>
            <Testimonial/>
            <Contact/>
            <Fotter/>
        </div>
    );
};

export default Home;