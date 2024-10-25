import React, { useReducer } from "react";

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
function RederceHook() {
  const [state1, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <h2>Count {state1.count}</h2>
        <button onClick={() => dispatch({type:'INCREMENT'})}className="btn btn-success">INCREMENT</button>
        <button onClick={() => dispatch({type:'DECREMENT'})}className="btn btn-success">DECREMENT</button>
    </div>
);
}

export default RederceHook;
