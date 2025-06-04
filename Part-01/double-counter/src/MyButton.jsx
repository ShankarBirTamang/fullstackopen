import React from 'react'

function MyButton({onClick, text}) {
  console.log("rendering MyButton component");
  
  // The MyButton component receives onClick and text as props
  return (
    <div>
      <button onClick={onClick}>{text}</button>
      {/* The button will call the onClick function when clicked */}
    </div>
  )
}

export default MyButton
