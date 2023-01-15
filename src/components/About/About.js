import React from 'react';

const About = () => {
    return (
        <div className='lg:flex  flex-1 w-3/4 m-auto'>
            <div>
                <img className='lg:w-2/3 w-3/4 mt-5 rounded-lg mx-auto' src="https://i.ibb.co/ThdshhP/FB-IMG-1642351473581.jpg" alt="" />
            </div>
            <div className='w-3/4 mt-5 mx-auto'>
                <p className='text-xl font-medium'>Hi , I am Puspok Protim Saha . I am a student of BSc in aeronautical engineering.Currently living in Dhaka, Bangladesh.I want get a high CGPA and go abroad for higher study.
                </p>
                <p className='text-xl my-5 font-medium'>
                    I am a MERN stack web developer. I am developing websites from last year. I am passionate about building websites. I generally use React JS for the front-end, Express JS and Node JS for the backend, and MongoDB as my database. As a web developer, I have to explore many many new technologies everyday and learn them to improve my skills.</p>
                <p className='text-xl my-5 font-medium'>
                    In future I want to work with a large software company.I am prepareing for the future goal.I am too much pationate to my work.If I got proper idea and enough time, I can emplement every features in my weebsite.
                </p>
            </div>
        </div>
    );
};

export default About;