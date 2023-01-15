import React, { useEffect, useState } from 'react';

const Experience = () => {
    const [experience,setExc]= useState([])

    const event = experience[0]
    console.log(event)
    useEffect(()=>{
        fetch('experience.json')
        .then(res=>res.json())
        .then(data=>setExc(data))
    },[])
    return (
        <div className='lg:px-28 sm:px-12 px-6'>
         <h1 className='my-8 text-5xl font-semibold text-center text-slate-600'>My Experience</h1>
            <div>
            <h1 className='text-3xl text-slate-400 font-bold'>Company Name: {event?.company} </h1>
            <h1 className='text-2xl text-gray-500 font-semibold'>Position Name: {event?.position} </h1>
            <h1 className='text-2xl text-gray-500 font-semibold'>Duration: {event?.dur}</h1>

            <div className='flex gap-5'>
            <div className="card w-full lg:w-96 h-auto my-5  bg-base-100 shadow-xl">
                            <figure className="px-2 pt-3">
                                <img src={event?.eventizer} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-red-500 text-2xl uppercase">Eventizer</h2>
                                <div className="card-actions">
                                    <a href={event?.link1} target='_blank' rel="noreferrer"> <button className="btn btn-outline">Live site </button></a>                            
                                </div>
                            </div>
             </div>
             <div className="card my-5 w-full lg:w-96 h-auto bg-base-100 shadow-xl">
                            <figure className="px-2 pt-3">
                                <img src={event?.ihost} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-red-500 text-2xl uppercase">iHost</h2>
                                <div className="card-actions">
                                    <a href={event?.link2} target='_blank' rel="noreferrer"> <button className="btn btn-outline">Live site </button></a>                            
                                </div>
                            </div>
             </div>
            </div>
            </div>
        </div>
    );
};

export default Experience;