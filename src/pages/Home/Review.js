import React from 'react';

const Review = ({reviewItem}) => {
    const {name, address, img,review}= reviewItem;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{review}</p>
        </div>
         <div  className='flex items-center'>
            <div  className='px-5 mb-3'> <img src={img} alt="" /></div>
            <div>
               <h2>{name}</h2>    
               <p>{address}</p>
            </div>        
         </div>                 
      </div>
    );
};

export default Review;