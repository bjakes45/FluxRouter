import React from 'react';
import {Link} from 'react-router';

class Top10Biz extends React.Component {
  	render() {
  		var link = "/bizpg/" + this.props._id;
      return (
  			<li>
  				<b>{this.props._id}</b> - <Link to={link}>{this.props.name}</Link> - <span className="glyphicon glyphicon-star"/>{this.props.rate} - <span className="glyphicon glyphicon-shopping-cart"/>{this.props.deals}
  			</li>
  		)
	}
}

export default Top10Biz;