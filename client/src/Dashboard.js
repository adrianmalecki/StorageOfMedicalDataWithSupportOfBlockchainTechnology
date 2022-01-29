import React, { Component }  from 'react';
import moment from 'moment';
import Share from './Share.js';
import './css/Dashboard.css';

 
class Dashboard extends Component{
  render(){

      let provider = '0x39f573c0f078847939AAEeEDca6BEe1cFE772086';

      return(
      <div className="container">
        <h2>Dashboard</h2>
          <h4>First name: {this.props.patient[0]}</h4>
          <h4>Last name: {this.props.patient[1]}</h4>
          <h4>Your medical data:</h4>

          <table className="table-sm table-bordered text-monospace" >
                <thead style={{ 'fontSize': '15px' }}>
                  <tr>
                    <th scope="col" >ID</th>
                    <th scope="col" >Hash</th>
                    <th scope="col" >File name</th>
                    <th scope="col" >File description</th>
                    <th scope="col" >Doctor address</th>
                    <th scope="col" >Patient address</th>
                    <th scope="col" >Date</th>
                  </tr>
                </thead>
                { this.props.yourfiles.map((yourfiles, key) => {
                  return(
                    <thead style={{ 'fontSize': '12px' }} key={key}>
                      <tr>
                      <td>{yourfiles.id}</td>
                        <td>
                          <a
                            href={"https://ipfs.infura.io/ipfs/" + yourfiles.hash}
                            rel="noopener noreferrer"
                            target="_blank">
                            {yourfiles.hash.substring(0,10)}...
                          </a>
                        </td>
                        <td>{yourfiles.name}</td>
                        <td>{yourfiles.description}</td>
                        <td>{yourfiles.uploader}</td>
                        <td>{yourfiles.owner}</td>
                        <td>{moment.unix(yourfiles.date).format('h:mm:ss A M/D/Y')}</td>
                      </tr>
                    </thead>

                  )
                })}
              </table>

          <div className="sharecont">
            <h2>Share data</h2>
                <form class="form-horizontal" id="share_form" 
                    onSubmit={(event) => {
                        event.preventDefault()
                        this.props.share(this.provider.value, this.id.value, this.privKey.value)
                        console.log('submit')
                                  
                    }}>
                  <div class="form-group">
                    <label class="control-label col-sm-2" for="share_addr">Your provider's  Ethereum address</label>
                    <div class="col-sm-6">
                      <input type="text" class="form-control" id="share_addr" ref={(input1) => {this.provider = input1}} placeholder="" name="share_addr"></input>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-2" for="rec_name">Record ID</label>
                    <div class="col-sm-6">
                      <input type="text" class="form-control" id="rec_name" ref={(input2) => {this.id = input2}} placeholder="" name="rec_name"></input>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="control-label col-sm-2" for="rec_name">Private key</label>
                    <div class="col-sm-6">
                      <input type="text" class="form-control" id="rec_name" ref={(input3) => {this.privKey = input3}} placeholder="" name="rec_name"></input>
                    </div>
                  </div>
                  
                  <div class="form-group">        
                    <div class="col-sm-offset-2 col-sm-10">
                      <button type="submit" id="share_submit" className="btn btn-primary">Share</button>
                    </div>
                  </div>
                </form>
        <div id="post_share">
        </div>
          </div>

          <div className="containerSharedWWithYou">
                  <h2>Shared with you</h2>
                  <table className="table-sm table-bordered text-monospace" >
                          <thead style={{ 'fontSize': '15px' }}>
                            <tr>
                              <th scope="col" >Hash</th>
                              <th scope="col" >File name</th>
                              <th scope="col" >File description</th>
                              <th scope="col" >Owner</th>
                              <th scope="col" >Date</th>
                            </tr>
                          </thead>
                          { this.props.sharedWithYouFiles.map((sharedWithYouFiles, key) => {
                            return(
                              <thead style={{ 'fontSize': '12px' }} key={key}>
                                <tr>
                                  <td>
                                    <a
                                      href={"https://ipfs.infura.io/ipfs/" + sharedWithYouFiles.hash}
                                      rel="noopener noreferrer"
                                      target="_blank">
                                      {sharedWithYouFiles.hash.substring(0,10)}...
                                    </a>
                                  </td>
                                  <td>{sharedWithYouFiles.name}</td>
                                  <td>{sharedWithYouFiles.description}</td>
                                  <td>{sharedWithYouFiles.owner}</td>
                                  <td>{moment.unix(sharedWithYouFiles.date).format('h:mm:ss A M/D/Y')}</td>
                                </tr>
                              </thead>

                            )
                          })}
                        </table>
                  </div>




        </div>

    )
  }
}


export default Dashboard;