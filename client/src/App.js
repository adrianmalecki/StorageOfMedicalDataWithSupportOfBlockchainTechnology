import React, { Component } from "react";
import SmartContract from "./build/contracts/SmartContract.json";
import Web3 from "web3";
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import JSEncrypt from 'jsencrypt'; 

import Register from './Register.js';
import Record from './Record.js';
import Dashboard from './Dashboard.js';
import Navbar from './Navbar.js';
import './App.css';

import { create } from "ipfs-http-client";
const ipfs = create('https://ipfs.infura.io:5001/api/v0');

const crypto = require("crypto");
const Algorithm = "aes-128-ecb";
 
class App extends Component {

  connect = async() => {
    await this.loadWeb3()
    await this.loadBlockchainData()
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
      console.log(this.state.patient)



      const fileCounter = this.state.patient[3];
      this.setState({fileCounter})
      console.log(fileCounter)

      for (var i = fileCounter - 1; i >= 0; i--){
        const file = await smartContract.methods.getPatientFiles(this.state.account, i).call();
        console.log(file);
        console.log(i);
        this.setState({
          yourfiles: [...this.state.yourfiles, file]
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
      yourfiles: [],
      content: null
    }
    this.captureFile = this.captureFile.bind(this)
    this.uploadFile = this.uploadFile.bind(this)
    this.addUser = this.addUser.bind(this)
  }

  addUser(firstname, lastname, pubKey){
    this.state.smartContract.methods.addPatient(this.state.account, firstname, lastname, pubKey).send({ from: this.state.account });
  }

  captureFile = event => {
    event.preventDefault()

    const file = event.target.files[0]
    const reader = new window.FileReader()

    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({
        buffer: Buffer(reader.result),
      })
      console.log('buffer', this.state.buffer)
    }
  }

  uploadFile = async (owner, filename, description) => {

   

    console.log("Submitting file to IPFS...")
    console.log(ipfs)
    try{
      let patient = await this.state.smartContract.methods.patientmapping(owner).call();
      let pubKey = patient[2];

      const key = Buffer.from(crypto.randomBytes(16), "utf8");
      console.log('key: ',key)

      const cipher = crypto.createCipheriv(Algorithm, key, Buffer.alloc(0));
      const encryptedFile = Buffer.concat([cipher.update(this.state.buffer) , cipher.final()]);

      //const buffer = Buffer.from(key, 'utf8')
      //const encrypted = crypto.publicEncrypt(pubKey, buffer)
///////////////////
      const inputData = encryptedFile;
      const cipher2 = crypto.createDecipheriv(Algorithm, key, Buffer.alloc(0));
      const output = Buffer.concat([cipher2.update(inputData) , cipher2.final()]);
      console.log(output);
      const added2 = await ipfs.add(output)
      console.log("Added2: ", added2)
////////////////////////////////
      const added = await ipfs.add(encryptedFile)
      await this.state.smartContract.methods.addRecord(added.path, filename, description, owner).send({ from: this.state.account });
      console.log("Added: ", added)
    }catch(error){
      console.log(error)
    }
  }

  
  render() {

    if(this.state.isPatient) {
      this.state.content = <div><Dashboard account={this.state.account} patient = {this.state.patient} yourfiles = {this.state.yourfiles}/ ></div>
    } else {
      this.state.content = <div><Register addUser={this.addUser} / ></div>
    }

    return (
      <Router>
        <div className="App">
          <div><Navbar account={this.state.account} connect={this.connect}/ ></div>
          <div className='metamaskConnection'>
             { this.state.content }
          </div>
          


           <Routes>
                 <Route exact path='/register' element={< Register addUser={this.addUser}/>}></Route>
                 <Route exact path='/record' element={< Record uploadFile={this.uploadFile} captureFile={this.captureFile} />}></Route>
                 <Route exact path='/dashboard' element={< Dashboard yourfiles = {this.state.yourfiles} /> }></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
 
export default App;