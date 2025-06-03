import SayHello from "./SayHello.js";
import React from "react";

let App = () => {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement("h1", null, "Welcome to React!"),
    React.createElement(SayHello, { firstName: "Sankar" }),
    React.createElement(SayHello, { firstName: "John" }),
    React.createElement(SayHello, { firstName: "Jane" }),
  );
};

export default App;
