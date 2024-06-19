import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderTree = () => {
  root.render(
    <BrowserRouter>
      {/* <React.StrictMode> */}
      <App
        store={store}
      />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  );
};
rerenderTree();

store.subscriber(rerenderTree);

// ============================================================================old version==============================================================
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     {/* <React.StrictMode> */}
//     <App allData={state} addPost={addPost} />
//     {/* </React.StrictMode> */}
//   </BrowserRouter>
// );
// ====================================================================================================================================================

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
