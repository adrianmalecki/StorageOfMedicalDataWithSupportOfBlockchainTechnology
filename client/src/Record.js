import React, { Component }  from 'react';

class Record extends Component{
  render(){
      return(
        <div className="container">
          <h2>Create a new record</h2>

          <form onSubmit={(event) => {
            event.preventDefault()
            this.props.uploadFile(this.patientaddress.value, this.filename.value, this.description.value)
            console.log('submit')
          }}>
            <div className="form-group">
              <label className="control-label col-sm-2" for="pat_addr">Patient's Ethereum Address</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="pat_addr" ref={(input4) => {this.patientaddress = input4}} placeholder="Enter patient's Ethereum address" name="pat_addr"></input>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" for="name">File name</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="file_name" ref={(input5) => {this.filename = input5}} placeholder="Enter file name" name="file_name"></input>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" for="description">Description</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="file_name" ref={(input6) => {this.description = input6}} placeholder="Enter description" name="file_name"></input>
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-2" for="file">File</label>
              <div className="col-sm-6">
                  <input type="file" onChange={this.props.captureFile} ></input>
              </div>
            </div>
          

            <div className="form-group">        
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary float-right">Submit</button>
              </div>
            </div>

          </form>
        </div>


    )
  }
}
export default Record;