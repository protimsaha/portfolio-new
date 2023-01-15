import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="hero min-h-[70vh] bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" ">
                        <p className='text-2xl font-semibold'>Email: <span className='text-xl text-primary'>protimsaha750@gmail.com</span></p>
                        <p className='text-2xl font-semibold'>Phone: <span className='text-xl text-primary'>01970972458</span></p>
                        <a className='text-xl text-slate-600' rel='noreferrer' href='https://www.linkedin.com/in/puspok-protim-saha-39230b225/' target='_blank'>Linkedin</a>


                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
                        <h2 className='text-2xl text-center'>Send me a message</h2>
                        <form action="https://formsubmit.co/protimsaha750@gmail.com" method="POST">
                            <input type="text" placeholder="Your Email" className="input input-bordered w-full my-4" />
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full my-4" />
                            <textarea rows={5} cols={5} type="text" placeholder="Message" className="input input-bordered w-full my-4" />
                            <button className='btn w-full' type="submit" value="Send">SEND</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;