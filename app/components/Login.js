import React from 'react';
import Logo from './Logo.jsx';
import Welcome from './Welcome.js';
import LoginForm from './LoginForm.js';
import Footer from './Footer.js';


class Login extends React.Component {
  render() {
    return (
    	<div>
      <Logo>
    		<div className='login row'>
	    		<Welcome/>
	    		<LoginForm/>
	    	</div>
	    </Logo>
      <Footer/>
      </div>
    );
  }
}

export default Login;