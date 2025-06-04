import MyButton from "./MyButton";

function Display({count, setCount}) {
  // The Display component receives count and setCount as props
  console.log("rendering Display component");
  const handleIncrement = () =>{
    setCount(count + 1);
  }
  const handleDecrement = () =>{
    setCount(count - 1);
  }
  const handleReset = () =>{
    setCount(0);
  }
  
  return (
    <div>
    <h1>Counter App</h1>
    <p>Hello, the count is {count}</p>
    <MyButton onClick={handleIncrement} text="Increment"/>
    <MyButton onClick={handleDecrement} text="Decrement"/>
    <MyButton onClick={handleReset} text="Reset"/>
    </div>
  )
}

export default Display
