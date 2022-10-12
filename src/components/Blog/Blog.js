import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div className='blog'>
            <h1 className='text-3xl font-bold pl-5 pt-5'>Whare is The purpose of react router ?</h1>
            <p className='text-2xl font-xl pl-5 pt-2'><span className='font-semibold'>Ans:</span>React Router is a standard library for routing in React.</p>

            <h1 className='text-3xl font-bold pl-5 pt-5'>How dose Contex API works?</h1>
            <p className='text-2xl font-xl pl-5 pt-2'><span className='font-semibold'>Ans:</span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. </p>

            <h1 className='text-3xl font-bold pl-5 pt-5'>What is USREF?</h1>
            <p className='text-2xl font-xl pl-5 pt-2'><span className='font-semibold'>Ans:</span>
                The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
        </div>

    );
};

export default Blog;