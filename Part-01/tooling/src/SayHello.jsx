import React from "react";

let SayHello = (props) => {
  console.log(props);

  return <h1 id="myId">Hello {props.firstName}</h1>;
};

export default SayHello;
