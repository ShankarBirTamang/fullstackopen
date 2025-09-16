import { createRoot } from "react-dom/client";
import { useReducer, useContext } from "react";
import CounterContext from "./CounterContext";

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

const Display = () => {
  const { counter } = useContext(CounterContext);
  return <h1>Counter: {counter}</h1>;
};

const Button = ({ type, label }) => {
  const { counterDispatch } = useContext(CounterContext);
  return <button onClick={() => counterDispatch({ type })}>{label}</button>;
};

const App = () => {
  const [counter, counterDispatch] = useReducer(counterReducer, 10);

  return (
    <CounterContext.Provider value={{ counter, counterDispatch }}>
      <div>
        <Display />
        <Button type="INCREMENT" label="+" />
        <Button type="DECREMENT" label="-" />
        <Button type="RESET" label="reset" />
      </div>
    </CounterContext.Provider>
  );
};
root.render(<App />);
