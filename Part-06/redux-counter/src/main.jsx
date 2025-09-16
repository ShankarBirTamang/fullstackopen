import { createRoot } from "react-dom/client";
import App from "./App";
import { CounterContextProvider } from "./CounterContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <CounterContextProvider>
    <App />
  </CounterContextProvider>
);
