import React from "react";
import { render } from "react-dom";
import { ApplicationContainer } from "./Containers/";
import store from "./store";
import { Provider } from "react-redux";

render(
  <Provider store={store}>
    <ApplicationContainer />
  </Provider>,
  document.getElementById("root")
);
