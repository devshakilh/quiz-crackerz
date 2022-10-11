import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';


const Home = () => {
    const quizs = useLoaderData();
    // console.log(quizs);
    return (
        <div>

            <h1>This is Home: {quizs.data.length}</h1>
            {
                quizs.data.map(quiz => <Quiz key={quiz.id}
                    quiz={quiz}

                ></Quiz>)
            }
        </div>
    );
};

export default Home;