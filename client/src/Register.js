import React from 'react';
 
function Home (){
    return(
		<div class="container">
			<h2>Create new account</h2>
			<form onSubmit={(event) => {
				event.preventDefault()
				this.props.addUser(this.patient.value, this.patient.value, this.patient.value, this.patient.value)
			}}>

				<div class="form-group">
					<label class="control-label col-sm-2" for="reg_addr">Ethereum address</label>
					<div class="col-sm-6">
						<input id="reg_addr" ref={(input) => this.patient[0].input } type="text" class="form-control"  placeholder="Enter your Ethereum address" name="reg_addr"></input>
					</div>
				</div>

				<div class="form-group">
					<label class="control-label col-sm-2" for="reg_addr">First name</label>
					<div class="col-sm-6">
						<input id="fn" ref={(input) => this.patient[1].input } type="text" class="form-control" placeholder="Enter your first name" name="fn"></input>
					</div>
				</div>

				<div class="form-group">
					<label class="control-label col-sm-2" for="reg_addr">Last name</label>
					<div class="col-sm-6">
						<input id="ln" ref={(input) => this.patient[2].input } type="text" class="form-control" placeholder="Enter your last name" name="ln"></input>
					</div>
				</div>

				<div class="form-group">
					<label class="control-label col-sm-2" for="reg_addr">PESEL</label>
					<div class="col-sm-6">
						<input id="pesel" ref={(input) => this.patient[3].input } type="text" class="form-control" placeholder="Enter your PESEL" name="pesel"></input>
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