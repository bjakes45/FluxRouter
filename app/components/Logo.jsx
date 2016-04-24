import React from 'react';
import {render} from 'react-dom';

class Logo extends React.Component{
	constructor(props) {
    super(props);
    this.state = {clicked: true};
    this.onClick = this.onClick.bind(this);
  	}
  	onClick () {
    	let newColor = !this.state.clicked;
    	this.setState({clicked: newColor});
  	}
	render () {
		var image = this.state.clicked ? './img/banner2.png' : './img/banner.png'
		return (
      <div>
      <nav className="navbar-fixed-top">
        <img className="img-responsive" src={image} onClick={this.onClick} height='70px' width='auto' />
      </nav>
      <div className="app">
        {this.props.children}
      </div>
      </div>
		);
	}
}

export default Logo;