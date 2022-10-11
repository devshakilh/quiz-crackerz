import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div >


            <nav>

                <div className='text-center'>

                    <Link className='pl-5' to='/home'>Home</Link>

                    <Link className='pl-5 text-xl' to='/statics'>Statics</Link>
                    <Link className='pl-5' to='/blog'>Blog</Link>
                </div>
            </nav>

        </div>
    );
};

export default Header;