import React from "react";
import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
};

const ExampleReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{state}</p>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>INC</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>DEC</button>
      </div>
    </div>
  );
};

export default ExampleReducer;
