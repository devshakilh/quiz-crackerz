import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';
const Quiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (
        <div className=" card w-60 rounded-full shadow-xl ">
            <div><img className='bg-zinc-300' src={logo} /></div>
            <div className="card-body flex bg-slate-400 justify-between">


                <h2 className="card-title font-semibold ">{name}</h2>
                <p>Total: {total}</p>


                <button className="btn btn-outline btn-primary bg-emerald-600 rounded-md w-24 font-medium"><Link to={`/quiz/${id}`}>Start Quiz</Link></button>

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