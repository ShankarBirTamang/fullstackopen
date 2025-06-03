import SayHello from "./SayHello";
import React from "react";

let App = () => {
  //   return React.createElement(
  //     "div",
  //     { className: "container" },
  //     React.createElement("h1", null, "Welcome to React!"),
  //     React.createElement(SayHello, { firstName: "Sankar" }),
  //     React.createElement(SayHello, { firstName: "John" }),
  //     React.createElement(SayHello, { firstName: "Jane" }),
  //   );
  return (
    <div className="container">
      <h1>Welcome to React!</h1>
      <SayHello firstName="Sankar" />
      <SayHello firstName="John" />
      <SayHello firstName="Jane" />
    </div>
  );
};

export default App;
