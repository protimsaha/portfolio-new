import React from 'react';
import Banner from './Banner';
import Experience from './Experience';
import Footer from './Footer';
import Projects from './Projects';
import Reviews from './Reviews';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <Experience></Experience>
            <Projects />
            <Reviews></Reviews>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;