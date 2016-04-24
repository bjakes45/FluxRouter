import React from 'react';
import DealsPanel from './DealsPanel';
import {Link} from 'react-router';

class ProfHome extends React.Component {
  render() {
  	var randomrate= (Math.floor(((Math.random()*.5)+9.5)*100)/100);
    var randomdeals = Math.floor((Math.random() * 50) + 1);
  	return(
  	<div>
  	<h4><b>Top Rated Items:</b></h4>
        <div className='row display'>
    	   	<div className="col-xs-4">
				<div className='well text-center'>
       				<img src="http://placehold.it/120x120/fdff00/000000?text=No+Picture+Provided"/>
       				<br/><br/><Link to="/itempg/7">ItemName7</Link><br/>
       				<Link to="/bizpg/7">Manufacturer7</Link><br/>
       				<span className="glyphicon glyphicon-shopping-cart"/>{randomdeals}<br/><br/>
           			<span className="glyphicon glyphicon-star"/>{randomrate}	
				</div>
			</div>
			<div className="col-xs-4">
				<div className='well text-center'>
       				<img src="http://placehold.it/120x120/fdff00/000000?text=No+Picture+Provided"/>
       				<br/><br/><Link to="/itempg/21">ItemName21</Link><br/>
       				<Link to="/bizpg/21">Manufacturer21</Link><br/>
       				<span className="glyphicon glyphicon-shopping-cart"/>{randomdeals}<br/><br/>
           			<span className="glyphicon glyphicon-star"/>{randomrate}	
				</div>
			</div>
			<div className="col-xs-4">
				<div className='well text-center'>
       				<img src="http://placehold.it/120x120/fdff00/000000?text=No+Picture+Provided"/>
       				<br/><br/><Link to="/itempg/4">ItemName4</Link><br/>
       				<Link to="/bizpg/4">Manufacturer4</Link><br/>
       				<span className="glyphicon glyphicon-shopping-cart"/>{randomdeals}<br/><br/>
           			<span className="glyphicon glyphicon-star"/>{randomrate}	
				</div>
			</div>
		</div>   	
		<h4><b>Latest Deal:</b></h4>
        <div className="well display">
	    	<div className="row">
				<div className="col-sm-3 text-center">
		   			<img src="http://placehold.it/120x120/fdff00/000000?text=No+Picture+Provided"/>
		   			<br/><br/>
		   			<span className="glyphicon glyphicon-star"/>{randomrate}
		   		</div>
				<div className="col-sm-9">
		    		<div className="pull-right">
		    			<h3>$4.99</h3>
		    			<br/><br/>
		    			<h3>Completed</h3>
		    		</div>
		    		<div className="pull-left">
			    		<Link to='/itempg/8'><h3><b>Giddy Yo-Yo</b></h3></Link>
			    		<h4>Manufacturer</h4>
			    		<h4>Vendor</h4>
			    		<h5>Host - Shares - <span className="glyphicon glyphicon-map-marker"/>.4 km</h5>
			    	</div>
				</div>
	    	</div>
	    </div>
	    </div>
	   );
    }
}

export default ProfHome;