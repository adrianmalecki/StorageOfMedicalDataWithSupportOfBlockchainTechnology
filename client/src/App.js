import React, { Component, useState} from "react";
import SimpleStorageContract from "./contracts/User.json";
import getWeb3 from "./getWeb3";
import Web3 from "web3";
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Register from './Register.js';
import About from './About.js';
import Patient from './Patient.js';
import Record from './Record.js';
import { ethers } from 'ethers';
import MetamaskConnection from './MetamaskConnection.js';
import './App.css';


import {USER_ADDRESS, USER_ABI} from './config';

 
class App extends Component {

  connect = async () =>{
    try{
      if (!window.ethereum)
        throw new Error('Install metamask first');
      await window.ethereum.request({method: "eth_requestAccounts"})
        .then(result => {this.setState({account: result[0]})});

    }catch (err){
      console.log('error')
    }
  }

  async loadWeb3() {
    if (window.ethereum) {
          window.ethereum.request({method: 'eth_requestAccounts'})
          .then(result => {
            this.setState({account: result[0]});
            console.log(result[0])
            console.log('erf')
          })
        }else {
          console.log('err')
        }
  }
  

  async loadBlockchainData(){
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545") 
    const network = await web3.eth.net.getNetworkType()
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})

    const user = new web3.eth.Contract(USER_ABI, USER_ADDRESS);
    this.setState({user})
    
    const isUser = await user.methods.isUser(this.state.account).call();
    this.setState({
        isUser
    })
    console.log(isUser);
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      isUser: false,
      user: ''
    }
  }



  render() {

    /*function isRegistered(accountaddress){
      if(this.state.isUser === true)
        //<Dashboard/ >
        return <div>rgvb</div>
      else
        ///<Register/ >

        return <div>eee</div>

    }*/

    return (
      <Router>
        <div className="App">
          <div className='metamaskConnection'>
            <h2>Connect your wallet</h2>
            <button onClick={this.connect}>Connect wallet</button>
            <div className='accountDisplay'>
              <h2>Address: {this.state.account}</h2>
              </div>
              
            </div>
          <p> ii: </p>
          <ul className="App-header">
            <li>
                <Link to="/register">Register</Link>
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
                 <Route exact path='/patient' element={< Patient />}></Route>
                 <Route exact path='/record' element={< Record />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
 
export default App;