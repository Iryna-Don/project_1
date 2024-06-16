import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addPost, changePostText, clearTextarea } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      {/* <React.StrictMode> */}
      <App allData={state} addPost={addPost} changePostText={changePostText} clearTextarea={clearTextarea} />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  );
};
