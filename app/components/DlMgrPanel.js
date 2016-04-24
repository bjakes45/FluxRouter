import React from 'react';
import {Link} from 'react-router';


class DlMgrPanel extends React.Component {
  render() {
    var itemlink ="/itempg/" + this.props.name;
  	var bizlink ="/bizpg/" + this.props.name;

    return (
      <div className="well display">
	    	<div className="row">
				<div className="col-sm-3 text-center">
		   			<img src="http://placehold.it/120x120/fdff00/000000?text=No+Picture+Provided"/>
		   			<br/><br/>
		   			<span className="glyphicon glyphicon-star"/>{(Math.floor(((Math.random()*4)+6)*100)/100)}
		   		</div>
				<div className="col-sm-9">
		    		<div className="pull-right">
		    			<h3>$4.99</h3>
		    			<br/><br/>
		    			<button><span className="glyphicon glyphicon-cog"></span></button>&nbsp; 
      					<button><span className="glyphicon glyphicon-trash"></span></button>
		    		</div>
		    		<div className="pull-left">
			    		<Link to={itemlink}><h3><b>Item Name{this.props.name}</b></h3></Link>
			    		<h4>Manufacturer</h4>
			    		<h4>Vendor</h4>
			    		<h5>Host - Shares - <span className="glyphicon glyphicon-map-marker"/>.4 km</h5>
			    	</div>
				</div>
	    	</div>
	    </div>
    );
  }
}

export default DlMgrPanel;