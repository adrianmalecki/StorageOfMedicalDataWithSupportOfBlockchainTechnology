import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Register from './Register.js';
import About from './About.js';
import Patient from './Patient.js';
import './App.css';
 
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/patient">Patient</Link>
              </li>

            </ul>
           <Routes>
                 <Route exact path='/register' element={< Register />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/patient' element={< Patient />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
 
export default App;