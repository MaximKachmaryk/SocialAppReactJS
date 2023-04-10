import "./index.css";

/* import reportWebVitals from "./reportWebVitals"; */

/* import { renderEntireTree } from "./render"; */
import state, { subscribe } from "./components/redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { addPost, updateNewPost } from "./components/redux/state";
/* import state from "./components/redux/state"; */

let renderEntireTree = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPost={updateNewPost} />
    </React.StrictMode>
  );
};
reportWebVitals();

renderEntireTree(state);
reportWebVitals();
subscribe(renderEntireTree);