import React from 'react';
import './Banner.css'
import me from '../../image/dipu.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

const Banner = () => {
    return (

        <div className="hero banner  min-h-[90vh] bg-base-100">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div
                    data-aos="fade-left"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    data-aos-duration="1500"
                    data-aos-offset="200"
                    className=''>
                    <img src={me} className=" max-w-sm lg rounded-lg shadow-2xl" alt='' />
                </div>
                <div className=''>
                    <h1 className=" font-bold  p-3 mb-5 banner-title">PUSPOK PROTIM SAHA</h1>
                    <div>
                        <h2 className='uppercase text-3xl font-bold mt-6 text-white'>Working Technologies</h2>
                        <div className='flex flex-col p-5 m-5'>
                            <h2 data-aos="fade-right" data-aos-easing="ease-in-out"
                                data-aos-once="false" data-aos-duration="1500" className='text-3xl font-bold text-orange-300'>React JS</h2>
                            <h2
                                data-aos-duration="1200"
                                data-aos="fade-right" className='text-3xl font-bold text-orange-300'>Express JS</h2>
                            <h2
                                data-aos-duration="800"
                                data-aos="fade-right" className='text-3xl font-bold text-orange-300'>Node JS</h2>
                            <h2
                                data-aos-duration="500"
                                data-aos="fade-right" className='text-3xl font-bold text-orange-300'>Mongo DB</h2>
                        </div>
                    </div>
                    <div>
                        <a rel='noreferrer' target='_blank' href='https://drive.google.com/file/d/1SgXxGOlZ-fBc424VATWmZuqXkGeQTBKg/view?usp=sharing' > <button className="btn  bg-gradient-to-r text-xl text-white from-secondary to-primary">Download Resume</button></a>

                        <a rel='noreferrer' href="https://www.linkedin.com/in/puspok-protim-saha-39230b225/" target='_blank'><button className='btn bg-red-500 mx-4 text-xl text-white  hover:btn-outline'>Hire me</button></a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;