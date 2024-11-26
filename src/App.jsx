import React, { useState, useEffect } from 'react';

function Countdown() {
  const [number, setNumber] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    let interval;
    if (isStarted && number !== '') {
      interval = setInterval(() => {
        setNumber((prev) => {
          const newNumber = parseInt(prev) - 1;
          if (newNumber <= 0) {
            clearInterval(interval);
            setIsStarted(false);
            setInputValue('');
            return 0;
          }
          return newNumber;
        });
      }, 1000);
    }

    return () => clearInterval(interval);

  }, [isStarted, number]);

  const handleInputChange = (e) => {
    const input = e.target.value;
    if (!isNaN(input) && input !== '') {
      setInputValue(input);
    }
  };

  const handleStartClick = () => {
    if (inputValue !== '') {
      setNumber(inputValue);
      setIsStarted(true);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Son kiriting"
      />
      <button onClick={handleStartClick} disabled={isStarted}>
        Start
      </button>
      <div>Qoldiq son: {number}</div>
    </div>
  );
}

export default Countdown;
