import React from 'react';
import {Link} from 'react-router';

class BizPanel extends React.Component {
  constructor(props) {
    	super(props);
    	this.state = {}
    }
  render() {
  	var bizlink ="/bizpg/" + this.props.name;
    var randomdeals = Math.floor((Math.random() * 50) + 1);
    var randomrate= (Math.floor(((Math.random()*5)+5)*100)/100);
    var biztype = Math.round(Math.random())? "Vendor":"Manufacturer";
    return (
      	<div className="col-xs-2">
			<div className='well text-center'>
       			<img src="http://placehold.it/120x120/fdff00/000000?text=No+Picture+Provided"/>
       			<br/><br/><Link to={bizlink}>BizName{this.props.name}</Link><br/>
       			{biztype}<br/>
       			<span className="glyphicon glyphicon-shopping-cart"/>{randomdeals}<br/><br/>
                <span className="glyphicon glyphicon-star"/>{randomrate}
            </div> 
		</div>   	
    );
  }
}

export default BizPanel;