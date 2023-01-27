import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import reducer from "./reducer";
import { createStore } from "redux";

const store = createStore(reducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
