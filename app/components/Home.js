import React from 'react';
import Top10 from './Top10';
import LastDeals from './LastDeals';
import HomeMap from './HomeMap';


class Home extends React.Component {
  constructor(props) {
    	super(props);
    	this.state = {map: true};
    	this.handleMap = this.handleMap.bind(this);
  	}
  	handleMap(){
		let newMap = !this.state.map;
    	this.setState({map: newMap});
  	}
  render() {
  	var map = this.state.map ? <Top10/>:<HomeMap  className='map'/>;
  	var btntxt = this.state.map ? "Switch to Map":"Switch to Top10";

    return (
	    <div>
        {map}
	    	<div className="display well text-center">
	    		<button className="form-control btn btn-default" onClick={this.handleMap}>{btntxt}</button>
	    	</div>
	    	<LastDeals/>
	    </div>
    );
  }
}

export default Home;