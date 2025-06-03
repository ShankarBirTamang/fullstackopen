let SayHello = (props) => {
  return React.createElement(
    "h1",
    { id: "title" },
    `Hello ${props.firstName} from React!`
  );
};

let App = () => {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement("h1", null, "Welcome to React!"),
    React.createElement(SayHello, { firstName: "Sankar" }),
    React.createElement(SayHello, { firstName: "John" }),
    React.createElement(SayHello, { firstName: "Jane" })
  );
};

let container = document.getElementById("root");
let root = ReactDOM.createRoot(container);
root.render(React.createElement(App, { firstName: "Sankar" }));
