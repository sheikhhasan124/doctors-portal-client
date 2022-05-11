import React, { useState } from 'react';
import Fotter from '../Shared/Fotter';
import AppointMentBanner from './AppointMentBanner';
import AvailableAppoinment from './AvailableAppoinment';

const Appointment = () => {
    const [date, setDate]=useState(new Date())
    return (
        <div>
            <AppointMentBanner date={date} setDate={setDate}></AppointMentBanner>
            <AvailableAppoinment date={date}/>
            <Fotter/>
        </div>
    );
};

export default Appointment;