import React, { useState, useEffect } from 'react';
import "./famousSentence.css"
const FamousSentence = () => {
  const fullText = "GOOD COOKS KNOW HOW. GREAT COOKS KNOW WHY.";
  const [text, setText] = useState('');
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    if (counter <= fullText.length) {
      const timer = setTimeout(() => {
        setText(fullText.slice(0, counter));
        setCounter(counter + 1);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [counter, fullText]);

  return <div className='famousSentence'>{text}</div>;
};

export default FamousSentence;
