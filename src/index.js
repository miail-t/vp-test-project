import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import * as confStore from "./configStore";

ReactDOM.render(
  <Provider store={confStore.store}>
    <PersistGate persistor={confStore.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
