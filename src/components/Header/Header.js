import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div >


            <nav>
                <div className="navbar bg-slate-900 text-white lg:flex lg:pt-5 lg:pb-10">
                    <div className="flex-1">
                        <Link className=' text-4xl lg:pl-5 font-semibold' to='home'>Study Quiz</Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal lg:items-center  lg:flex  ">

                            <Link className='lg:pr-5 text-xl hover:text-emerald-500' to='/home'>Home</Link>
                            <li>
                                <Link className='lg:p-5 text-xl  hover:text-emerald-500' to='/statics'>Statics</Link>

                            </li>
                            <li> <Link className='lg:pr-28  font-bold  hover:text-emerald-500' to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                </div>

                {/* <div className='text-center pb-10 pt-5 bg-slate-900 text-white'>


                    <Link className=' text-4xl pr-20 font-semibold' to=''>Study Quiz</Link>


                    <Link className='pl-40 text-xl hover:text-emerald-500' to='/home'>Home</Link>

                    <Link className='pl-5 text-xl  hover:text-emerald-500' to='/statics'>Statics</Link>
                    <Link className='pl-5 font-bold  hover:text-emerald-500' to='/blog'>Blog</Link>


                </div> */}
            </nav>

        </div>
    );
};

export default Header;