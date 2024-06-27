import '../../fonts/grifter.css'
import React, { useState, useRef } from 'react';

export function Question({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const answerRef = useRef(null);

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  }

  return (
    <div className='max-w-[719px] flex flex-col gap-4 cursor-pointer'>
      <div 
        className='flex w-full items-center justify-between'
        onClick={handleShowAnswer}
      >
        <h2
          className="text-[20px] font-bold text-[#1A1A1A]"
          style={{
            fontFamily: 'Grifter',
          }}
        >{question}</h2>
        <div className={`flex items-center justify-center ${
          showAnswer ? 'transform rotate-180 ease-in-out duration-300' : 'ease-in-out duration-300'
        }`}>
          <svg className="heroicons-outline-chevron-down" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div
        ref={answerRef}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${showAnswer ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        style={{
          maxHeight: showAnswer ? `${answerRef.current.scrollHeight}px` : '0px'
        }}
      >
        <p className='text-[16px] text-[#3A3A3A] font-[400]'>{answer}</p>
      </div>
    </div>
  );
}