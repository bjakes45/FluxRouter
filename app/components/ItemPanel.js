import React from 'react';
import {Link} from 'react-router';

class ItemPanel extends React.Component {
  
  constructor(props) {
    	super(props);
    	this.state = {fav: (Math.round(Math.random()/3)? true:false)};
    	this.handleFav = this.handleFav.bind(this);
  	}
	handleFav(){
		let newFav = !this.state.fav;
    	this.setState({fav: newFav});
  	}
  render() {
  	var heartClass = this.state.fav ? "glyphicon glyphicon-heart pull-right":"glyphicon glyphicon-heart-empty pull-right";
  	var itemlink ="/itempg/" + this.props.name;
  	var bizlink ="/bizpg/" + this.props.name;
    var randomdeals = Math.floor((Math.random() * 50) + 1);
    var randomrate= (Math.floor(((Math.random()*5)+5)*100)/100);

    return (
      	<div className="col-xs-2">
			<div className='well text-center'>
       			<img src="http://placehold.it/120x120/fdff00/000000?text=No+Picture+Provided"/>
       			<br/><br/><Link to={itemlink}>ItemName{this.props.name}</Link><br/>
       			<Link to={bizlink}>Manufacturer{this.props.name}</Link><br/>
       			<span className="glyphicon glyphicon-shopping-cart"/>{randomdeals}<br/><br/>
            <div className="row">
              <div className="col-sm-6">
                <span className="pull-right"><span className="glyphicon glyphicon-star"/>{randomrate}</span>
              </div>
              <div className="col-sm-6">
           			<i onClick={this.handleFav} className={heartClass}/>
              </div>
            </div> 
     		</div>
		</div>   	
    );
  }
}

export default ItemPanel;