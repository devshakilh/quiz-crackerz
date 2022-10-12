import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const AnswareOption = ({ quiz }) => {
    const { correctAnswer } = quiz;

    function myfun(e) {
        const quixs = (e.target.value)
        if (quiz === correctAnswer) {
            toast.success('right')
        }

    }


    return (
        <div className=''>
            <ul className=' bg-teal-200 border-solid border-2 border-sky-500 mx-4 my-2 py-3 px-3 font-medium'>

                <li><input onClick={(e) => myfun(e)} type="radio" name="" id="" />{quiz}</li>

            </ul>
        </div >
    );
};

export default AnswareOption;