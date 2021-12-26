import React from 'react';
 
function Record (){
    return(
    <div class="container">
      <h2>Create a new record</h2>
      <form class="form-horizontal" id="patientForm">
        <div class="form-group">
          <label class="control-label col-sm-2" for="fullname">Patient's full name</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" id="fullname" placeholder="John Doe" name="fullname"></input>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="record_name">Record name</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" id="record_name" placeholder="Record identification name" name="record_name"></input>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="pat_addr">Patient's Ethereum Address</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" id="pat_addr" placeholder="Enter patient's Ethereum address" name="pat_addr"></input>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="doc_addr">Doctor's Ethereum Address:</label>
          <div class="col-sm-6">          
            <input type="text" class="form-control" id="doc_addr" placeholder="Enter doctor's Ethereum address" name="doc_addr"></input>
          </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2" for="note">Doctor's Note</label>
            <div class="col-lg-6">
                <textarea rows="4" col="5" type="text" class="form-control" id="note" placeholder="Enter symptoms, ailments, medications etc."></textarea>
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