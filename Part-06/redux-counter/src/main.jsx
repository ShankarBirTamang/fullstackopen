import { createRoot } from "react-dom/client";
import { useReducer } from "react";

const container = document.getElementById("root");
const root = createRoot(container);

const counterReducer = (state = 10, action) => {
  console.log("action", action);
  console.log("state", state);
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else if (action.type === "RESET") {
    return 0;
  }
  return state;
};

const App = () => {
  const [counter, counterDispatch] = useReducer(counterReducer, 10);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => counterDispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => counterDispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => counterDispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};
root.render(<App />);
