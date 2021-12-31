import React, { Component }  from 'react';
 
class Register extends Component{
	render(){
	    return(
			<div className="container">
				<h2>Create new account</h2>
				<form onSubmit={(event) => {
					event.preventDefault()
					this.props.addUser(this.fn.value, this.ln.value, this.pesel.value)
					console.log('submit')
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
						<label className="control-label col-sm-2" for="reg_addr">PESEL</label>
						<div className="col-sm-6">
							<input id="pesel" ref={(input3) => { this.pesel = input3 }}  type="text" className="form-control" placeholder="Enter your PESEL" name="pesel"></input>
						</div>
					</div>	

					

					<div className="form-group">        
						<div className="col-sm-offset-2 col-sm-10">
							<button type="submit" id="btnsubmit" className="btn btn-default">Submit</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}


export default Register;