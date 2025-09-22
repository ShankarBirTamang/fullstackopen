import { useState } from "react";

const App = () => {
  const counter1 = useCounter(10);
  const counter2 = useCounter(0);

  return (
    <div>
      <div>
        <div>{counter1.value}</div>
        <button onClick={counter1.increase}>plus</button>
        <button onClick={counter1.decrease}>minus</button>
        <button onClick={counter1.reset}>zero</button>
      </div>
      <div>
        <div>{counter2.value}</div>
        <button onClick={counter2.increase}>plus</button>
        <button onClick={counter2.decrease}>minus</button>
        <button onClick={counter2.reset}>zero</button>
      </div>
    </div>
  );
};
export default App;
