import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';
const Quiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (
        <div className=" card w-60  shadow-xl ">
            <div><img className='bg-zinc-300 rounded-sm' src={logo} /></div>
            <div className="card-body flex bg-slate-400 justify-between rounded-sm ">


                <h2 className="card-title font-semibold py-1 ml-1 ">{name}</h2>
                <p className='py-1'>Total: {total}</p>


                <button className="btn btn-outline btn-primary bg-emerald-600 rounded-md w-24 font-medium  hover:bg-sky-900 py-2"><Link to={`/quiz/${id}`}>Start Quiz</Link></button>


            </div>
        </div>


        // <div className='quiz'>
        //     <h1 className='text-3xl'>Name: {name}</h1>
        //     <img src={logo} />
        //     <h4 className='text-4xl font-bold'>Total:{total}</h4>

        // </div>
    );
};

export default Quiz;