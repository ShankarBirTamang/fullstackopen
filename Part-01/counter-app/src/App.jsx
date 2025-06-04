import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);

  setTimeout(() => {
    setCount(count + 1);
  }, 1000);

  return <div>Hello the count is {count}</div>;
};

export default App;
