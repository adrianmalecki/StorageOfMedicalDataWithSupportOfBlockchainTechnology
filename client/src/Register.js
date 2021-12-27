import React from 'react';
 
function Home (){
    return(
		<div class="container">
			<h2>Create new account</h2>
			<form class="form-horizontal" id="register_form" >
				<div class="form-group">
					<label class="control-label col-sm-2" for="reg_addr">Ethereum address</label>
					<div class="col-sm-6">
						<input type="text" class="form-control" id="reg_addr" placeholder="Enter your Ethereum address" name="reg_addr"></input>
					</div>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-2" for="reg_addr">First name</label>
					<div class="col-sm-6">
						<input type="text" class="form-control" id="fn" placeholder="Enter your first name" name="fn"></input>
					</div>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-2" for="reg_addr">Last name</label>
					<div class="col-sm-6">
						<input type="text" class="form-control" id="ln" placeholder="Enter your last name" name="ln"></input>
					</div>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-2" for="reg_addr">PESEL</label>
					<div class="col-sm-6">
						<input type="text" class="form-control" id="pesel" placeholder="Enter your PESEL" name="pesel"></input>
					</div>
				</div>				
				<div class="form-group">        
					<div class="col-sm-offset-2 col-sm-10">
						<button type="submit" id="btnsubmit" class="btn btn-default">Submit</button>
					</div>
				</div>
			</form>
		</div>
)
}
export default Home;