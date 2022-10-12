import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div >


            <nav>

                <div className='text-center pb-10 pt-5 bg-slate-900 text-white'>


                    <Link className=' text-4xl pr-20 font-semibold' to=''>Study Quiz</Link>


                    <Link className='pl-40 text-xl hover:text-emerald-500' to='/home'>Home</Link>

                    <Link className='pl-5 text-xl  hover:text-emerald-500' to='/statics'>Statics</Link>
                    <Link className='pl-5 font-bold  hover:text-emerald-500' to='/blog'>Blog</Link>


                </div>
            </nav>

        </div>
    );
};

export default Header;