import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
	render() {
		return (
      		<nav className='navbar navbar-inverse navbar-static-bottom'>
      			<div className='navbar-header'>
			        <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
			        	<span className='sr-only'>Toggle navigation</span>
			            <span className='icon-bar'></span>
			            <span className='icon-bar'></span>
			            <span className='icon-bar'></span>
			        </button>
    			</div>
    			<div id='navbar' className='navbar-collapse collapse'>
        			<ul className='nav navbar-nav'>
	                	<li><Link to='/contact'>Contact Us</Link></li>
	                	<li><Link to='/faq'>FAQ</Link></li>
	                </ul>
        			<ul className='nav navbar-nav navbar-right'>
	                	<li><Link to='/about'>SHOPIDARITY | Connect, Share & Save - &copy;2015-{new Date().getFullYear()}</Link></li>
	                </ul>
	            </div>
	        </nav>
	    )
	}
}

export default Footer;          				