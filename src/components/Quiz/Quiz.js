import React from 'react';
import './Quiz.css';
const Quiz = ({ quiz }) => {
    const { name, logo, total } = quiz;
    return (
        <div className="grid-cols-4 card w-60 shadow-xl">
            <div><img className='bg-zinc-300' src={logo} /></div>
            <div className="card-body flex bg-slate-400 mb-4 justify-between">


                <h2 className="card-title font-semibold ">{name}</h2>
                <p>Total: {total}</p>


                <button className="btn btn-outline btn-primary bg-emerald-600 rounded-md w-24">Button</button>

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