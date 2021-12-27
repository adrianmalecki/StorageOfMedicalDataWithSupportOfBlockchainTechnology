import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import Web3 from "web3";
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Register from './Register.js';
import About from './About.js';
import Patient from './Patient.js';
import Record from './Record.js';
import MetamaskConnection from './MetamaskConnection.js';
import './App.css';


 
class App extends Component {

  async componentWillMount() {
    // Detect Metamask
    const metamaskInstalled = typeof window.web3 !== 'undefined'
    this.setState({ metamaskInstalled })
    if(metamaskInstalled) {
      await this.loadWeb3()
      await this.loadBlockchainData()
    }
  }


  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
    }
  }


  render() {
    return (
       <Router>
          <div className="App">
          <MetamaskConnection />
             
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
              <li>
                <Link to="/record">Record</Link>
              </li>

            </ul>
           <Routes>
                 <Route exact path='/register' element={< Register />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/patient' element={< Patient />}></Route>
                 <Route exact path='/record' element={< Record />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
 
export default App;