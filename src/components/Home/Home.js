import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';


const Home = () => {
    const quizs = useLoaderData();
    // console.log(quizs);
    return (
        <div>
            <h1 className='text-4xl font-semibold text-center py-10 sm:px-0'>Welcome to Our Journey !</h1>
            <div className='grid lg:grid-cols-4 lg:pl-20  sm:grid-cols-1  pt-4  '>

                {
                    quizs.data.map(quiz => <Quiz key={quiz.id}
                        quiz={quiz}

                    ></Quiz>)
                }

            </div>
        </div>
    );
};

export default Home;