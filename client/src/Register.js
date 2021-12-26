import React from 'react';
 
function Home (){
    return(
		<div class="container">
			<h2>Enter existing patient address or create a new address</h2>
			<form class="form-horizontal" id="register_form" >
				<div class="form-group">
					<label class="control-label col-sm-2" for="reg_addr">Patient's Ethereum address</label>
					<div class="col-sm-6">
						<input type="text" class="form-control" id="reg_addr" placeholder="" name="reg_addr"></input>
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