import React from 'react';

const Footer = () => {
    return (
        <div className='bg-neutral'>
            <footer className="footer p-10  text-neutral-content">
                <div>
                    <h1 className='text-4xl font-bold text-white uppercase'>Puspok Protim Saha</h1>

                    <p className='text-2xl'>Junior MERN stack developer.</p>

                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/puspok-protim-saha-39230b225/"> <img role='button' className='w-[40px] h-[37px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt="" /></a>

                        <a target='_blank' rel="noreferrer" href="https://www.facebook.com/protimshaha.dipu/">  <svg role='button' xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>

                        <a target='_blank' rel="noreferrer" href="https://github.com/protimsaha">  <img role='button' className='w-[40px] h-[37px]' src="https://pngimg.com/uploads/github/github_PNG82.png" alt="" /></a>

                    </div>

                </div>
            </footer>
            <p className='text-xl mt-8 text-center text-white'>Copyright claimed Ⓒ 2022</p>
        </div>
    );
};

export default Footer;