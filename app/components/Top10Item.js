import React from 'react';
import {Link} from 'react-router';

class Top10Item extends React.Component {
  constructor(props) {
    	super(props);
    	this.state = {fav: false};
    	this.handleFav = this.handleFav.bind(this);
  	}
	handleFav(){
		let newFav = !this.state.fav;
    	this.setState({fav: newFav});
  	}
  	render() {
  		var heartClass = this.state.fav ? "glyphicon glyphicon-heart":"glyphicon glyphicon-heart-empty";
  		var link = "/itempg/" + this.props._id;
      return (
  			<li>
  				<b>{this.props._id}</b> - <Link to={link}>{this.props.name}</Link> - <span className="glyphicon glyphicon-star"/>{this.props.rate} - <span className="glyphicon glyphicon-shopping-cart"/>{this.props.deals} - <i onClick={this.handleFav} className={heartClass}/>
  			</li>
  		)
	}
}

export default Top10Item;
