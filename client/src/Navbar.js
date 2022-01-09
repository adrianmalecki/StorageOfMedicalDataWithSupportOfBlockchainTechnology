import React, { Component }  from 'react';
 
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


      } class="btn btn-primary float-right" type="submit">Connect wallet</button>
    }


      return(
        <nav class="navbar bg-dark">
          <a class="navbar-brand float-right" href="/">Nazwa strony</a>
          <div class="nav navbar-right float-right">
            { content }
          </div>
        </nav>
      )
  }
}

export default Navbar;

