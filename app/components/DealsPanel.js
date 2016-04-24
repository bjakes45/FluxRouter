import React from 'react';
import {Link} from 'react-router';


class DealsPanel extends React.Component {
  	render() {
    var randomrate= (Math.floor(((Math.random()*5)+5)*100)/100);
  	var itemlink ="/itempg/" + this.props.id;

  		return(
			<div className="col-sm-6">
	    		<div className="well display">
	    			<div className="row">
						<div className="col-sm-3 text-center">
			    			<img src="http://placehold.it/120x120/fdff00/000000?text=No+Picture+Provided"/>
			    			<br/><br/>
			    			<span className="glyphicon glyphicon-star"/>{randomrate}
			    		</div>
						<div className="col-sm-9">
				    		<div className="pull-right">
				    			<h3>{this.props.cost}</h3>
				    			<br/><br/>
				    			<h3>Status</h3>
				    		</div>
				    		<div className="pull-left">
					    		<Link to={itemlink}><h3><b>{this.props.item}</b></h3></Link>
					    		<h4>Manufacturer</h4>
					    		<h4>Vendor</h4>
					    		<h5>{this.props.host} - Shares - <span className="glyphicon glyphicon-map-marker"/>{this.props.dist}</h5>
					    	</div>
		    			</div>
	    			</div>
	    		</div>
	    	</div>
		)
	}
}

export default DealsPanel;