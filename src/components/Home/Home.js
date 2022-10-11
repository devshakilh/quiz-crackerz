import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';


const Home = () => {
    const quizs = useLoaderData();
    // console.log(quizs);
    return (

        <div className='grid grid-cols-4 pt-4 pl-20 '>


            {
                quizs.data.map(quiz => <Quiz key={quiz.id}
                    quiz={quiz}

                ></Quiz>)
            }
        </div>
    );
};

export default Home;