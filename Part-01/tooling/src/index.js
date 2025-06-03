import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";

let container = document.getElementById("root");
let root = createRoot(container);
root.render(React.createElement(App, { firstName: "Sankar" }));
