import React from 'react';
import {Link} from 'react-router';

class Login extends React.Component {
  render() {
		var message = message? message:""; 
		return (
			<div className="login-right col-xs-6">
		      	<h4>Enter your information:</h4>
		      	{message}
		      	<form action="/login" method="post"><div className="row text-center">
		      		<div className="col-xs-4">
				      	Login:<input type="text" placeholder="email" name="email"/>
				    </div>
				    <div className="col-xs-4">
				      	Password:<input type="password" placeholder="password" name="password"/>
				    </div>
				    <div className="col-xs-4">
				      	<br/>
				      	<button type="submit">
				      		<span>Login</span>
				      	</button>
				    </div>
				</div></form>
				<br/>
				<div className="panel panel-default text-center signup">
					<br/><h4>Is this you first time here?</h4>
					<form action="/signup" method="post"><div className="display">
						<input name="email" type="text" className="form-control" placeholder="Email"/><br/>
						<input name="password" type="password" className="form-control" placeholder="Password"/><br/>
						<input type="password" className="form-control" placeholder="Retype Password"/><br/>
						Date of Birth<br/>
						<input type="date" className="form-control" placeholder="Date of Birth"/><br/>
						    <button type="submit">
						    	<span>Signup</span>
						    </button>
						    <br/>
					</div></form>
					<br/>{this.message}
				</div>
			</div>
		)
	}
}

export default Login; 