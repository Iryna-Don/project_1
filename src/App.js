import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
// можно задать псевдоним для BrowserRouter прописав as и дав псевдоним Router
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = ({ allData, addPost, changePostText, clearTextarea}) => {
  return (
    <>
      {/* <Router> */}
      <div className='app-wrapper'>
        <Header />
        <Navbar allData={allData} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/Profile' element={<Profile allData={allData} addPost={addPost} changePostText={changePostText} clearTextarea={clearTextarea}/>} />
            {/* <Route path='/Profile' Component={Profile} /> */}
            <Route path='/Dialogs' element={<Dialogs allData={allData} />} />
            <Route path='/News' element={<News />} />
            <Route path='/Music' element={<Music />} />
            <Route path='/Settings' element={<Settings />} />
            <Route path='/Dialogs/*' element={<Dialogs allData={allData} />} />
          </Routes>
        </div>
      </div>
      {/* </Router> */}
    </>
  );
};

export default App;
