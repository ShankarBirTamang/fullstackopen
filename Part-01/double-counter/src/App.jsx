import { useState } from "react";
import Display from "./Display";

const App = () => {
  let initialState = { left: 1, right: 1 };
  const [clicks, setClicks] = useState(initialState);
  const [clickHistory, setClickHistory] = useState([]);
  const [totalClicks, setTotalClicks] = useState(0);
  console.log("rendering App component");

  return <div>
    <Display clicks={clicks} setClicks={setClicks} 
    history={clickHistory}
    setHistory={setClickHistory}
    totalClicks={totalClicks}
    setTotalClicks={setTotalClicks}
    />
    
    History : {clickHistory}
  </div>;
};

export default App;
