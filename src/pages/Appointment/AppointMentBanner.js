import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointMentBanner = () => {
    const [date, setDate]=useState(new Date())
    return (
        <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img src={chair} alt="chair" class="max-w-lg ml-12 rounded-lg shadow-2xl" />
            <div>
            <DayPicker 
              mode="single"
              selected={date}
              onSelect={setDate}
              
            />
            <p>you have selected {format(date,'PP')}</p>
            </div>
        </div>
      </div>
    );
};

export default AppointMentBanner;