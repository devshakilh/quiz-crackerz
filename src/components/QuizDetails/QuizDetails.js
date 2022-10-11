import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const QuizDetails = () => {

    const quiz = useLoaderData();

    // console.log(quiz);
    return (
        <div className='grid grid-cols-2 gap-4 bg-gray-200'>

            {

                quiz.data.questions.map(quiz => <QuizQuestion
                    key={quiz.id}
                    quiz={quiz}
                ></QuizQuestion>)
            }
        </div>
    );
};

export default QuizDetails;