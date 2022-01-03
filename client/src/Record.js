import React from 'react';
 
function Record (){
    return(
    <div class="container">
      <h2>Create a new record</h2>
      <form class="form-horizontal" id="patientForm">
        <div class="form-group">
          <label class="control-label col-sm-2" for="pat_addr">Patient's Ethereum Address</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" id="pat_addr" placeholder="Enter patient's Ethereum address" name="pat_addr"></input>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="pat_addr">File name</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" id="file_name" placeholder="Enter file name" name="file_name"></input>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="pat_addr">Description</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" id="description" placeholder="Enter description" name="description"></input>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="hash">Hash</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" id="hash" placeholder="Enter file hash" name="hash"></input>
          </div>
        </div>
        
        
        <div class="form-group">        
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">Submit</button>
          </div>
        </div>
      </form>
    </div>

  )
}
export default Record;