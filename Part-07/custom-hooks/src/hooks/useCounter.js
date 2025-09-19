const useCounter = (initialValue = 0) => {
  const [value, setValue] = useState(initialValue);

  const increase = () => setValue(value + 1);
  const decrease = () => setValue(value - 1);
  const reset = () => setValue(0);

  return {
    value,
    increase,
    decrease,
    reset,
  };
};
