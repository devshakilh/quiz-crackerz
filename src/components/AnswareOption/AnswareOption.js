import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const AnswareOption = ({ quiz }) => {
    const { correctAnswer, options } = quiz;


    function myfun(e) {
        const quixs = (e.target.innerText)
        if (quixs === correctAnswer) {
            toast.success('right')
        }
        else { toast.error('wrong') }

    }


    return (
        <div className=''>
            <ul className=' bg-teal-200 border-solid border-2 border-sky-500 mx-4 my-2 py-3 px-3 font-medium'>

                {
                    options.map(option => <li onClick={(e) => myfun(e)}>{option}</li>)
                }

            </ul>
        </div >
    );
};

export default AnswareOption;