import React, { Component }  from 'react';

class Record extends Component{
  render(){
      return(
        <div className="container">
          <h2>Create a new record</h2>
          <form className="form-horizontal" id="patientForm">
            <div className="form-group">
              <label className="control-label col-sm-2" for="pat_addr">Patient's Ethereum Address</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="pat_addr" placeholder="Enter patient's Ethereum address" name="pat_addr"></input>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" for="pat_addr">File name</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="file_name" placeholder="Enter file name" name="file_name"></input>
              </div>
            </div>
          
            <div className="card mb-3 mx-auto bg-dark">
              <h2 className="text-white bg-dark">Share file</h2>
                <form onSubmit={(event) => {
                  event.preventDefault()
                  this.props.uploadFile(this.description.value)
                }}>
                  <div className="form-group">
                    <input id="description" ref={(input4) => {this.description = input4}} type="text" className="form control" placeholder="upload file"></input>
                  </div>
                  <input type="file" onChange={this.props.captureFile} ></input>
                  <button type="submit" className="btn-primary btn-block">Submit</button>
              </form> 
              
       
            <div className="form-group">        
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-default">Submit</button>
              </div>
            </div>
          </div>
          </form>
        </div>


    )
  }
}
export default Record;