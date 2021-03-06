import React, { Component }  from 'react';
import moment from 'moment';
 
class Dashboard extends Component{
  render(){


      return(
      <div class="container">
        <h2>share records</h2>
        <form class="form-horizontal" id="share_form" >
          <div class="form-group">
            <label class="control-label col-sm-2" for="eth_addr">Your Ethereum address</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" id="eth_addr" placeholder="" name="eth_addr"></input>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="share_addr">Your friend's  Ethereum address</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" id="share_addr" placeholder="" name="share_addr"></input>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="rec_name">Record Name</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" id="rec_name" placeholder="" name="rec_name"></input>
            </div>
          </div>
          
          <div class="form-group">        
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" id="share_submit" class="btn btn-default">share</button>
            </div>
          </div>
        </form>
        <div id="post_share">
        </div>
      </div>
    )
  }
}


export default Dashboard;