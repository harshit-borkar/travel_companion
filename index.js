import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from './App';
import './index.css';
import App2 from "./App2";


 const rootElement = document.getElementById("root");
 ReactDOM.render(
   <Router>
    <Routes>
     <Route exact path="/" element={<App/>} />
     <Route path="/explore" element={<App2/>} />
    </Routes>
   </Router>,
   rootElement
 );