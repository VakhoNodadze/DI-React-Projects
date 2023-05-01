import React, { FC, useState, useEffect } from 'react';

type CounterProps = {
  initialValue?: number;
  increaseValue?: number;
  decreaseValue?: number;
};

const Counter: FC<CounterProps> = ({
  initialValue = 0,
  increaseValue = 1,
  decreaseValue = 1,
}) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrease = () =>
    setCount((prevCount) => prevCount + increaseValue);
  const handleDecrease = () =>
    setCount((prevCount) => prevCount - decreaseValue);
  const handleReset = () => setCount(initialValue);

  useEffect(() => {
    console.log('Counter component mounted');
    return () => {
      console.log('Counter component unmounted');
    };
  }, [count]);

  return (
    <div>
      <button onClick={() => handleIncrease()}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <p>Counter: {count}</p>
    </div>
  );
};

export default Counter;
