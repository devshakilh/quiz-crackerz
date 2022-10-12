import React from 'react';
import AnswareOption from '../AnswareOption/AnswareOption';
import { Eye } from 'react-hero-icon/solid';

const QuizQuestion = ({ quiz }) => {
    const { question, options } = quiz;
    console.log(quiz);
    return (
        <div>

            <div className='flex items-center'>
                <h1 className='text-2xl font-semibold px-4 py-4'>{question}</h1>
                <Eye className=' h-6 w-8'></Eye>
            </div>
            {/* <input type="radio" name='' id="" /> */}
            {
                quiz.options.map(quiz => <AnswareOption quiz={quiz}></AnswareOption>)
            }

        </div>
    );
};

export default QuizQuestion;