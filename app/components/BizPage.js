import React from 'react';
import BizPagePanel from './BizPagePanel';

class BizPage extends React.Component {
    render() {
	    return (
	    	<div className='row'>
	        	<div className='col-sm-3'>
	          		<div className='panel text-center display'> 
	          			<h4>Company {this.props.params.id}</h4>
	          			<img src="http://placehold.it/160x160/fdff00/000000?text=No+Picture+Provided"/>
			          	<h4>BizTypes</h4>
	        		  	<h4>Location(s)</h4>
	          			<h4><span className="glyphicon glyphicon-star"/>Rating</h4>
		          	</div>
	        	</div>
	        	<div className='col-sm-9'>
	        		<BizPagePanel id="1" cost="4.50" host="Bryan" dist="0.5 km"/>
	        	</div>
	      	</div>
	    );
	}
}

export default BizPage;