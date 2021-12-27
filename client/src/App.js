import React, { Component } from "react";
import SimpleStorageContract from "./contracts/User.json";
import getWeb3 from "./getWeb3";
import Web3 from "web3";
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Register from './Register.js';
import About from './About.js';
import Patient from './Patient.js';
import Record from './Record.js';
import MetamaskConnection from './MetamaskConnection.js';
import './App.css';


import {USER_ADDRESS, USER_ABI} from './config';

 
class App extends Component {

  componentWillMount(){
    this.loadBlockchainData();
  }


  async loadBlockchainData(){
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545") 
    const network = await web3.eth.net.getNetworkType()
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})

    const user = new web3.eth.Contract(USER_ABI, USER_ADDRESS);
    this.setState({user})
    
    const isUser = await user.methods.usersAdd(0).call();
    this.setState({isUser})
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      isUser: ''
    }
  }


  render() {
    return (
      <Router>
        <div className="App">
          <MetamaskConnection /> 
          <p> ii: {this.state.isUser}</p>
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