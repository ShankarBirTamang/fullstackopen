import MyButton from "./MyButton";

function Display({clicks, setClicks}) {
  // The Display component receives count and setCount as props
  console.log("rendering Display component");
  const handleLeftIncrement = () =>{
    let newState = {
      left: clicks.left + 1,
      right: clicks.right
    }
    setClicks(newState);
  }
  const handleRightIncrement = () =>{
    let newState = {
      left: clicks.left,
      right: clicks.right + 1
    } 
    setClicks(newState);
  }
  const handleLeftDecrement = () =>{
    let newState = {
      left: clicks.left - 1,
      right: clicks.right
      }
      setClicks(newState);
      }

  const handleRightDecrement = () =>{
    let newState = {
      left: clicks.left,
      right: clicks.right - 1
      }
      setClicks(newState);
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
    </div>
  )
}

export default Display
