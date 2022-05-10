import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import TreatMentService from './TreatMentService';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Info/>
            <Services/>
            <TreatMentService/>
        </div>
    );
};

export default Home;