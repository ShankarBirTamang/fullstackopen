import React from "react";

let SayHello = (props) => {
  return React.createElement(
    "h1",
    { id: "title" },
    `Hello ${props.firstName} from React!`,
  );
};

export default SayHello;
