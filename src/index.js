import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "./assets/styles/index.scss";
import store from "./redux/store/store";

ReactDOM.render(
  <Provider store={store().store}>
    <PersistGate loading={null} persistor={store().persister}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
