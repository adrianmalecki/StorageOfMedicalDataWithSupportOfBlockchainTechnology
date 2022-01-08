import React, { Component }  from 'react';
import moment from 'moment';
 
class Dashboard extends Component{
  render(){
      return(
      <div className="container">
        <h2>Dashboard: {this.props.account}</h2>
          <h4>First name: {this.props.patient[0]}</h4>
          <h4>Last name: {this.props.patient[1]}</h4>
          <h10>Public key: {this.props.patient[2]}</h10>
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
                { this.props.filemapping.map((filemapping, key) => {
                  return(
                    <thead style={{ 'fontSize': '12px' }} key={key}>
                      <tr>
                        <td>
                          <a
                            href={"https://ipfs.infura.io/ipfs/" + filemapping.hash}
                            rel="noopener noreferrer"
                            target="_blank">
                            {filemapping.hash.substring(0,10)}...
                          </a>
                        </td>
                        <td>{filemapping.name}</td>
                        <td>{filemapping.description}</td>
                        <td>{filemapping.uploader}</td>
                        <td>{filemapping.owner}</td>
                        <td>{moment.unix(filemapping.date).format('h:mm:ss A M/D/Y')}</td>
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