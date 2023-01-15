import axios from 'axios';
import React from 'react';
import './Testimonial.css'

const Testimonial = () => {
    const update = event => {
        event.preventDefault()
        const data = {
            name: event.target.name.value,
            location: event.target.location.value,
            email: event.target.email.value,
            sDes: event.target.sDes.value
        }
        event.target.reset()

        axios.post('https://desolate-citadel-04738.herokuapp.com/reviews', data)
            .then(res => console.log(res))
    }

    return (
        <div className='feedback min-h-[60vh] '>
            <h2 className='uppercase text-4xl text-slate-900 font-semibold text-center'>Please give me a feedback</h2>
            <form onSubmit={update} className='flex-col flex '>
                <input type="text" name='name' placeholder="Your name" className="input input-bordered input-secondary mx-auto w-2/3 my-5" />
                <input type="text" name='location' placeholder="Your Location" className="input input-bordered input-secondary mx-auto w-2/3 my-5" />
                <input type="text" placeholder="Your email" name='email' className="input input-bordered input-secondary mx-auto w-2/3 my-5" />
                <textarea placeholder='Testimonial' className='border rounded-xl mx-auto w-2/3 my-5 px-3' name="sDes" id="" cols="5" rows="5"></textarea>
                <input className=' btn mx-auto w-1/2 my-5' type="submit" value="submit" />
            </form>
        </div>
    );
};
//
export default Testimonial;