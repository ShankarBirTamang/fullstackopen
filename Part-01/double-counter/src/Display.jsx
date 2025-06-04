import MyButton from "./MyButton";

function Display({clicks, setClicks,history,setHistory,totalClicks,setTotalClicks}) {
  // The Display component receives count and setCount as props
  console.log("rendering Display component");
  const handleLeftIncrement = () =>{
    let newLeftClick = clicks.left+1;
    let newState = {
      left: newLeftClick,
      right: clicks.right
    }
    setClicks(newState);
    setHistory([...history, '+L']);
    setTotalClicks(newLeftClick + clicks.right);
  }
  const handleRightIncrement = () =>{
    let newState = {
      left: clicks.left,
      right: clicks.right + 1
    } 
    setClicks(newState);
    setHistory([...history, '+R']);
    setTotalClicks(totalClicks + 1);
  }
  const handleLeftDecrement = () =>{
    let newState = {
      left: clicks.left - 1,
      right: clicks.right
      }
    setClicks(newState);
    setHistory([...history, '-L']);
    setTotalClicks(totalClicks - 1);
  }

  const handleRightDecrement = () =>{
    let newState = {
      left: clicks.left,
      right: clicks.right - 1
      }
      setClicks(newState);
      setHistory([...history, '-R']);
      setTotalClicks(totalClicks - 1);
      }



  return (
    <div>
      <h1>Double Counter App</h1>
    <div>
      <p>Hello, the left click count is {clicks.left}</p>
      <MyButton onClick={handleLeftIncrement} text="Left Increment"/>
      <MyButton onClick={handleLeftDecrement} text="Left Decrement"/>
    </div>
    <div>
      <p>Hello, the left right count is {clicks.right}</p>
      <MyButton onClick={handleRightIncrement} text="Right Increment"/>
      <MyButton onClick={handleRightDecrement} text="Right Decrement"/>
    </div>
    Total Clicks : {totalClicks}
    </div>
  )
}

export default Display
