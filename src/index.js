import "./index.css";
import store from "./components/redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
const renderEntireTree = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App
          state={store.getState()}
          dispatch={store.dispatch.bind(store)}
          store={store}
        />
      </Provider>
    </React.StrictMode>
  );
};

renderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});
