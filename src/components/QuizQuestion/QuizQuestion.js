import React from 'react';
import AnswareOption from '../AnswareOption/AnswareOption';

const QuizQuestion = ({ quiz }) => {
    const { question, options } = quiz;
    console.log(quiz);
    return (
        <div>

            <h1 className='text-2xl font-semibold px-4 py-4'>{question}</h1>

            {/* <input type="radio" name='' id="" /> */}
            {
                quiz.options.map(quiz => <AnswareOption quiz={quiz}></AnswareOption>)
            }

        </div>
    );
};

export default QuizQuestion;