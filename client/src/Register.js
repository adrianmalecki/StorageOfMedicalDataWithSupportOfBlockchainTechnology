import React, { Component }  from 'react';
import './css/Register.css';
 
class Register extends Component{
	render(){
	    return(
			<div className="container">
				<h2>Create new account</h2>
				<div className="form">
				<form onSubmit={(event) => {
					event.preventDefault()
					this.props.addUser(this.fn.value, this.ln.value, this.pubKey.value)
				}}>

					<div className="form-group">
						<label className="control-label col-sm-2" for="reg_addr">First name</label>
						<div className="col-sm-6">
							<input id="fn" ref={(input) => { this.fn = input }}  type="text" className="form-control" placeholder="Enter your first name" name="ln"></input>
	          
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-sm-2" for="reg_addr">Last name</label>
						<div className="col-sm-6">
							<input id="ln"  ref={(input2) => { this.ln = input2 }}  type="text" className="form-control" placeholder="Enter your last name" name="ln"></input>
						</div>
					</div>

					<div className="form-group">
						<label className="control-label col-sm-2" for="reg_addr">Public key</label>
						<div className="col-sm-6">
							<input id="pesel" ref={(input3) => { this.pubKey = input3 }}  type="text" className="form-control" placeholder="Enter your public key" name="pk"></input>
						</div>
					</div>	

					<div className="form-group">        
						<div className="col-sm-offset-2 col-sm-10 ">
							<button type="submit mx-auto" id="btnsubmit" className="btn btn-primary">Submit</button>
						</div>
					</div>
				</form>
				</div>

			</div>
		)
	}
}

export default Register;