import React from 'react';
import {Link} from 'react-router';


class BizPagePanel extends React.Component {
  	render() {
  	var itemlink ="/itempg/" + this.props.id;
  	var bizlink ="/bizpg/" + this.props.id;
  	var hostlink ="/hostpg/" + this.props.id;

  		return(
    		<div className="well display">
    			<div className="row">
					<div className="col-sm-3 text-center">
			    		<h3>{this.props.cost}</h3>
		    		</div>
					<div className="col-sm-9">
			    		<div className="pull-right">
			    			<br/><br/>
			    			<h3>Status</h3>
			    		</div>
			    		<div className="pull-left">
				    		<Link to={itemlink}><h3>Item</h3></Link>
				    		<Link to={bizlink}><h3>Vendor</h3></Link>
				    		<h5><Link to={hostlink}>{this.props.host}</Link> - Shares - <span className="glyphicon glyphicon-map-marker"/>{this.props.dist}</h5>
				    	</div>
	    			</div>
    			</div>
    		</div>
		)
	}
}

export default BizPagePanel;