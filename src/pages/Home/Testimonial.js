import React from 'react';
import quote from '../../assets/icons/quote.svg'
import person1 from '../../assets/images/people1.png'
import person2 from '../../assets/images/people2.png'
import person3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id:1,
            name:'Winson Herry',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address:'California',
            img:person1
        },
        {
            _id:2,
            name:'Wayy Herry',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address:'Texas',
            img:person2
        },
        {
            _id:3,
            name:'Winson Karry',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address:'London',
            img:person3
        },
    ]
    return (
        <section>
            <div  className='flex justify-between mt-12'>
                <div>
                    <h3  className='text-primary text-xl font-bold'>Testimonial</h3>
                    <h2  className='text-3xl'>What Our Patients Says </h2>
                </div>
                <div>
                    <img src={quote}  className="w-24 lg:w-44" alt="img" />
                </div>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {reviews.map(review=><Review key={review._id} reviewItem={review}></Review>)}
            </div>
        </section>
    );
};

export default Testimonial;