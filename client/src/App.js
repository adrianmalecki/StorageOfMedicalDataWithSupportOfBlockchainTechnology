import React, { Component } from "react";
import SimpleStorageContract from "./contracts/User.json";
import getWeb3 from "./getWeb3";
import Web3 from "web3";
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Register from './Register.js';
import About from './About.js';
import Patient from './Patient.js';
import Record from './Record.js';
import './App.css';


import {USER_ADDRESS, USER_ABI} from './config';

 
class App extends Component {

  connect = async() => {
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


  async loadBlockchainData(){
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545") 
    const network = await web3.eth.net.getNetworkType()
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})

    const userContract = new web3.eth.Contract(USER_ABI, USER_ADDRESS);
    this.setState({userContract})
    const isUser = await userContract.methods.isUser(this.state.account).call();
    console.log(isUser)

    
    const patient = await userContract.methods.usersmapping(this.state.account).call();
    this.setState({ patient })
    console.log({patient})
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      isUser: false,
      patient: [],
      test: ''
    }

    this.addUser=this.addUser.bind(this)
  }

  addUser(firstname, lastname, pesel){
    this.state.userContract.methods.addUser(this.state.account, firstname, lastname, pesel).send({ from: this.state.account })  
  }



  render() {

    let content
    if(!this.state.isUser) {
      content = 
        <div>
          <h2>First name: {this.state.patient[0]}</h2>
          <h2>Last name: {this.state.patient[1]}</h2>
          <h2>PESEL: {this.state.patient[2]}</h2>
        </div>
    } else {
      content = <div><Register addUser={this.addUser} /></div>
    }

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
          <div>{content}</div>


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
                 <Route exact path='/register' element={< Register addUser={this.addUser}/>}></Route>
                 <Route exact path='/patient' element={< Patient />}></Route>
                 <Route exact path='/record' element={< Record />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
 
export default App;