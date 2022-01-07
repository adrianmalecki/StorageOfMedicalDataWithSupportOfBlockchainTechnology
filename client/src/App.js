import React, { Component } from "react";
import SmartContract from "./build/contracts/SmartContract.json";
import Web3 from "web3";
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Register from './Register.js';
import Patient from './Patient.js';
import Record from './Record.js';
import Dashboard from './Dashboard.js';
import './App.css';

/*const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })*/
 
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
      window.alert('Install Metamask first')
    }
  }


  async loadBlockchainData(){
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = SmartContract.networks[networkId]
    if(networkData){
      const smartContract = new web3.eth.Contract(SmartContract.abi, networkData.address)
      this.setState({ smartContract })
      const isPatient = await smartContract.methods.isPatient(this.state.account).call()
      this.setState({isPatient})
      console.log(isPatient)
      if(isPatient){
        const patient = await smartContract.methods.patientmapping(this.state.account).call();
        this.setState({patient})
      }
      const fileCounter = await smartContract.methods.fileCounter().call();
      this.setState({fileCounter})
      console.log(fileCounter)

      for (var i = fileCounter; i >= 1; i--){
        const file = await smartContract.methods.filemapping(i).call()
        this.setState({
          filemapping: [...this.state.filemapping, file]
        })
      }

      console.log('totu')

    }else{
      window.alert('Change network to: ', { networkData })    
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      smartContract: null,
      isPatient: false,
      patient: [],
      filemapping: []
    }
    this.captureFile = this.captureFile.bind(this)
    this.uploadFile = this.uploadFile.bind(this)
    this.addUser = this.addUser.bind(this)
  }

  addUser(firstname, lastname, pubKey){
    this.state.smartContract.methods.addPatient(this.state.account, firstname, lastname, pubKey).send({ from: this.state.account });
  }

  captureFile(){console.log('description')}
  uploadFile(description){console.log(description)}

  render() {

    let content
    if(this.state.isPatient) {
      content = <div><Dashboard account={this.state.account} patient = {this.state.patient} / ></div>
    } else {
      content = <div><Register addUser={this.addUser} / ></div>
    }

    return (
      <Router>
        <div className="App">
          <div className='metamaskConnection'>
            <h2>Connect your wallet</h2>
            <button onClick={this.connect}>Connect wallet</button>
            <h2>Address: {this.state.account}</h2>
            { content }
          </div>
          

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
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/record">Record</Link>
              </li>

            </ul>
           <Routes>
                 <Route exact path='/register' element={< Register addUser={this.addUser}/>}></Route>
                 <Route exact path='/patient' element={< Patient />}></Route>
                 <Route exact path='/record' element={< Record uploadFile={this.uploadFile}/>}></Route>
                 <Route exact path='/dashboard' element={< Dashboard /> }></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
 
export default App;