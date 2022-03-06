import store from "./redux/redux_store";
import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App
      // state={state}
      // dispatch={store.dispatch.bind(store)}
      // store={store}
      />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
