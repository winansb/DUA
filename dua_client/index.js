import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./src/store";

const mainContainer = document.getElementById("root");
const root = createRoot(mainContainer);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);