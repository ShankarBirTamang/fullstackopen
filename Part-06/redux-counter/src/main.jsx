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

const Display = ({ counter }) => <h1>Counter: {counter}</h1>;

const Button = ({ dispatch, type, label }) => (
  <button onClick={() => dispatch({ type })}>{label}</button>
);

const App = () => {
  const [counter, counterDispatch] = useReducer(counterReducer, 10);

  return (
    <div>
      <Display counter={counter} />
      <Button dispatch={counterDispatch} type="INCREMENT" label="+" />
      <Button dispatch={counterDispatch} type="DECREMENT" label="-" />
      <Button dispatch={counterDispatch} type="RESET" label="reset" />
    </div>
  );
};
root.render(<App />);
