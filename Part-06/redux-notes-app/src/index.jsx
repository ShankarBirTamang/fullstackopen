import { createRoot } from "react-dom/client";
// import { useState } from "react";
import { createStore } from "redux";
import noteReducer from "./reducers/noteReducer";

import App from "./App";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);

const store = createStore(noteReducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
