import { createContext, useReducer, useContext } from "react";

const counterReducer = (state = 10, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
  const [counter, counterDispatch] = useReducer(counterReducer, 10);
  return (
    <CounterContext.Provider value={{ counter, counterDispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterValue = () => {
  const { counter } = useContext(CounterContext);
  return counter;
};

export const useCounterDispatch = () => {
  const { counterDispatch } = useContext(CounterContext);
  return counterDispatch;
};

export default CounterContext;
