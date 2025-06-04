import { useState } from "react";
import Display from "./Display";

const App = () => {
  const [count, setCount] = useState(1);
  console.log("rendering App component");
  

  // setTimeout(() => {
  //   setCount(count + 1);
  // }, 1000);

  return <div>
    <Display count={count} setCount={setCount} />
  </div>;
};

export default App;
