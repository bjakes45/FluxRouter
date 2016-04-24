import React from 'react';
import BizPanel from './BizPanel'


class BizRows extends React.Component {
  render() {
    var totalBiz  = this.props.totalBiz;
    var bizPerRow = this.props.bizPerRow;
    var numRows = this.props.numRows;
    var bizlist = this.props.bizlist;
    var bizs = [];

		
    for (var i = 1; i <= totalBiz; i++) {
        	bizs.push({name: i, id: i});
        }	
       	var bizlist = bizs.map(function(biz){
    		return(
        	<BizPanel key={biz.id} name={biz.name}/>
      		)
    	  });
        bizs = [];
		return (
			<div className="row display">
        		{bizlist}
      		</div>	
		)
	}
}

export default BizRows;