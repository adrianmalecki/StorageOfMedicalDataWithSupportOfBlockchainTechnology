import React, { Component }  from 'react';
import moment from 'moment';
 
class Dashboard extends Component{
  render(){
      return(
      <div className="container">
        <h2>Your dashboard</h2>
          <h4>First name: {this.props.patient[0]}</h4>
          <h4>Last name: {this.props.patient[1]}</h4>
          <h4>Your medical data:</h4>

          <table className="table-sm table-bordered text-monospace" >
                <thead style={{ 'fontSize': '15px' }}>
                  <tr>
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
        </div>
    )
  }
}


export default Dashboard;