import { createRoot } from "react-dom/client";
// import { useState } from "react";
import { createStore, combineReducers } from "redux";
import noteReducer from "./reducers/noteReducer";
import filterReducer from "./reducers/filterReducer";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
