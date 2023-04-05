// @ts-nocheck
import { React, useState, useReducer } from 'react';

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      throw new Error();
  }
}

function App() {
  // useReducer is the best solution in React for handling complex state interactions so let's look at how we can convert a component from useState to useReducer.
  // The first thing we need to do is create a reducer function. This function will be responsible for handling the state changes. It will take the current state and an action as arguments and return the new state.
  // The reducer function is passed to the useReducer hook. The useReducer hook returns an array with the current state and a dispatch function. The dispatch function is used to trigger state changes.
  // The dispatch function is called with an action object. The action object must have a type property. The type property is used to determine which state change to make.
  // The dispatch function can also be called with a payload. The payload is an object that can contain any data that is needed to make the state change.
  // The dispatch function can be called from anywhere in the component. This is the main difference between useState and useReducer. With useState, the state can only be changed from within the component.
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}

export default App;
