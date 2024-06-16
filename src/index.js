import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { rerenderEntireTree } from "./render";
import state from "./redux/state";

rerenderEntireTree(state);

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
