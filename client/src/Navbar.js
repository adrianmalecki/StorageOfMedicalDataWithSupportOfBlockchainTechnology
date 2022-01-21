import React, { Component }  from 'react';
import './css/Navbar.css';
 
class Navbar extends Component{
  render(){

    let content
    if((this.props.account).length !== 0) {
      content = this.props.account
    } else {
      content = <button onClick={(event) => {
            event.preventDefault()
            this.props.connect()
            console.log('click')}


      } className="btn btn-primary float-right" type="submit">Connect wallet</button>
    }


      return(
        <nav className="navbar bg-dark">
          <a className="navbar-brand float-right" href="/">Electronic health records</a>
          <div className="nav navbar-right float-right">
            { content }
          </div>
        </nav>
      )
  }
}

export default Navbar;

