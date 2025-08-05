import { createRoot } from "react-dom/client";
// import { useState } from "react";
import { createStore } from "redux";
// import App from "./App";

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

const store = createStore(counterReducer);

const App = () => {
  // const [count, setCount] = useState(0);
  const handleIncrement = () => {
    // setCount(count + 1);
    store.dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    // setCount(count - 1);
    store.dispatch({ type: "DECREMENT" });
  };
  const handleReset = () => {
    // setCount(0);
    store.dispatch({ type: "RESET" });
  };
  return (
    <div>
      <h1>Counter: {store.getState()}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
root.render(<App />);
store.subscribe(() => {
  root.render(<App />);
});
