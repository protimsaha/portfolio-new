import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
    return (
        <div>
            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="w-full navbar bg-accent">
                        <Link role='button' to='/' className="flex-1 text-3xl  uppercase font-bold px-2 mx-2">Puspok Protim Saha</Link>
                        <div className="flex-none lg:hidden">
                            <label for="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">

                                <li><NavLink className='rounded-md ' to='/home'>Home</NavLink></li>
                                <li><NavLink className='rounded-md mx-4' to='/contact'>Contact</NavLink></li>
                                <li><NavLink className='rounded-md mx-4' to='blogs'>Blogs</NavLink></li>
                                <li><NavLink className='rounded-md mx-4' to='/about'>About</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    {children}
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                        <li><NavLink className='rounded-md ' to='/home'>Home</NavLink></li>
                        <li><NavLink className='rounded-md my-4' to='/contact'>Contact</NavLink></li>
                        <li><NavLink className='rounded-md my-4' to='/blogs'>Blogs</NavLink></li>
                        <li><NavLink className='rounded-md my-4' to='/about'>About</NavLink></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;