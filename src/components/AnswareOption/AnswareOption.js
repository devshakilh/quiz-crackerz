import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const AnswareOption = ({ quiz }) => {
    function myfun() {
        toast("Right Answare!");
    }

    return (
        <div className=''>
            <ul className=' bg-teal-200 border-solid border-2 border-sky-500 mx-4 my-2 py-3 px-3 font-medium'>

                <li><input onClick={myfun} type="radio" name="" id="" />{quiz}</li>

            </ul>
        </div >
    );
};

export default AnswareOption;