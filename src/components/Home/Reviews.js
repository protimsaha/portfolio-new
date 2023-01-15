import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className=' rounded-2xl min-h-[50vh] px-6 my-14'>
            <h2 className='text-slate-600 text-5xl font-semibold text-center'>Testimonials</h2>
            <div className='grid mt-20 gap-x-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review =>
                        <div key={review._id} className="card lg:w-96 w-full my-5 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className='flex items-center '>
                                    <h2 className="card-title">{review.name}</h2>
                                    <h3 className='text-xl text-secondary ml-3'>{review.location}</h3>
                                </div>
                                <p>{review.review}</p>

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Reviews;
