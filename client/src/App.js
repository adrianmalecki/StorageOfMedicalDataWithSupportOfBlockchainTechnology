import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './Home.js';
import About from './About.js';
import './App.css';
 
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>

            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
 
export default App;