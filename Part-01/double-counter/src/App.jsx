import { useState } from "react";
import Display from "./Display";

const App = () => {
  let initialState = { left: 1, right: 1 };
  const [clicks, setClicks] = useState(initialState);
  console.log("rendering App component");
  

  // setTimeout(() => {
  //   setCount(count + 1);
  // }, 1000);

  return <div>
    <Display clicks={clicks} setClicks={setClicks} />
  </div>;
};

export default App;
