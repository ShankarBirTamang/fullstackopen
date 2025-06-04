import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

let counter = 1;
root.render(<App counter={counter}/>);

setInterval(() => {
    counter += 1;
    console.log(counter);
    root.render(<App counter={counter}/>);
}, 1000);

