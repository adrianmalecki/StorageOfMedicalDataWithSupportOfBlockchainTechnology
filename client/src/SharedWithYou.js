import React, { Component }  from 'react';
import moment from 'moment';
 
class SharedWithYou extends Component{
  render(){
      return(
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
    )
  }
}


export default SharedWithYou;
























/*<table className="table-sm table-bordered text-monospace" >
                <thead style={{ 'fontSize': '15px' }}>
                  <tr>
                    <th scope="col" >Hash</th>
                    <th scope="col" >File name</th>
                    <th scope="col" >File description</th>
                    <th scope="col" >Doctor address</th>
                    <th scope="col" >Patient address</th>
                    <th scope="col" >Date</th>
                    <th scope="col" ></th>
                    <th scope="col" >Share</th>
                  </tr>
                </thead>
                { this.props.yourfiles.map((yourfiles, key) => {
                  return(
                    <thead style={{ 'fontSize': '12px' }} key={key}>
                      <tr>
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
                        
                        <td>
                              <div class="col-sm-12">
                                <input type="text" class="form-control" id="share_addr" ref={(input) => {input = provider}} placeholder="Your provider's address" name="share_addr"></input>
                              </div>
                        </td>

                        <td>
                          <form onSubmit={(event) => {
                              event.preventDefault()
                              this.props.share(yourfiles.hash, provider)
                              console.log(provider)
                            }}>
                              <div class="col-sm-12">
                                <button type="submit" id="share_submit" className="btn btn-primary">Share</button>
                              </div>
                          </form>
                          
                          <div id="post_share">
                          </div></td>
                      </tr>
                    </thead>

                  )
                })}
              </table>*/