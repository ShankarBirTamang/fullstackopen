
function Display({count, setCount}) {
  // The Display component receives count and setCount as props
  console.log("rendering Display component");
  
  return (
    <div>
    <h1>Counter App</h1>
    <p>Hello, the count is {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
    <button onClick={() => setCount(0)}>Reset</button> 
    </div>
  )
}

export default Display
