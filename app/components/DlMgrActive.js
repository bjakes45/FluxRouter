import React from 'react';
import DlMgrPanel from './DlMgrPanel'

class DlMgrActive extends React.Component {
  render() {
 	 var totalDeals = 4;
    var deallist = [];
    var deals = [];

		
    for (var i = 1; i <= totalDeals; i++) {
        	deals.push({name: i, id: i});
        }	
       	var deallist = deals.map(function(deal){
    		return(
        	<DlMgrPanel key={deal.id} name={deal.name}/>
      		)
    	  });
        deals = [];
		return (
			<div className="panel display">
        		<br/>
        		{deallist}
      		</div>	
		)
	}
}

export default DlMgrActive;