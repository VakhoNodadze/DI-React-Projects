import React, { FC, useState, useEffect, useReducer } from 'react';

type CounterProps = {
  initialValue?: number;
  increaseValue?: number;
  decreaseValue?: number;
};

type CounterState = {
  count: number;
};

const Increment = 'increment';
const Decrement = 'decrement';
const Reset = 'reset';

type Increase = {
  type: typeof Increment;
  payload: number;
};

type Decrease = {
  type: typeof Decrement;
  decreaseValue: number;
};

type TReset = {
  type: typeof Reset;
  initialValue: number;
};

type Action = Increase | Decrease | TReset;

function reducer(state: CounterState, action: Action) {
  switch (action.type) {
    case Increment:
      return { count: state.count + action.payload };
    case Decrement:
      return { count: state.count - action.decreaseValue };
    case Reset:
      return { count: action.initialValue };
    default:
      throw new Error();
  }
}

const Counter: FC<CounterProps> = ({
  initialValue = 0,
  increaseValue = 1,
  decreaseValue = 1,
}) => {
  const initialState: CounterState = { count: initialValue };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrease = () =>
    dispatch({ type: Increment, payload: increaseValue });

  const handleDecrease = () => dispatch({ type: Decrement, decreaseValue });

  const handleReset = () => dispatch({ type: Reset, initialValue });

  return (
    <div>
      <button onClick={() => handleIncrease()}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <p>Counter: {state.count}</p>
    </div>
  );
};

export default Counter;
