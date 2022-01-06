import React, { Component }  from 'react';
 
class Dashboard extends Component{
  render(){
      return(
      <div className="container">
        <h2>Dashboard: {this.props.account}</h2>
          <h4>First name: {this.props.patient[0]}</h4>
          <h4>Last name: {this.props.patient[1]}</h4>
          <h10>Public key: {this.props.patient[2]}</h10>
          <h4>Your files:</h4>

        </div>
    )
  }
}


export default Dashboard;