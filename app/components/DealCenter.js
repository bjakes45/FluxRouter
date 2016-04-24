import React from 'react';
import DealsPanel from './DealsPanel';

class DealCenter extends React.Component {
  render() {
    var deals = [
    	{_id: "1d", item: "Item 1", cost:'$30.99', host:"Host1", dist:'2km'},
    	{_id: "2d", item: "Item 2", cost:'$1.24', host:"Host2", dist:'1km'},
    	{_id: "3d", item: "Item 3", cost:'$5.01', host:"Host3", dist:'.7km'},
    	{_id: "4d", item: "Item 4", cost:'$6.67', host:"Host4", dist:'3km'},
    	{_id: "5d", item: "Item 5", cost:'$3.15', host:"Host5", dist:'8km'},
    	{_id: "6d", item: "Item 6", cost:'$54.69', host:"Host6", dist:'.7km'},
    	{_id: "7d", item: "Item 7", cost:'$4.44', host:"Host7", dist:'.5km'},
    	{_id: "8d", item: "Item 8", cost:'$10.99', host:"Host8", dist:'2km'},
    	{_id: "9d", item: "Item 9", cost:'$15.35', host:"Host9", dist:'15km'},
    	{_id: "10d", item: "Item 10",cost:'$0.99',  host:"Host10", dist:'4km'}
    ];
    var deallist = deals.map(function(deal) {
	    return (
	    <DealsPanel key={deal._id} cost={deal.cost} item={deal.item} host={deal.host} dist={deal.dist} />
	    )
	});
    return (
	    <div className="panel display">
	    	<div>
		    	<h2><b>&nbsp;Deal Center:</b></h2>
		    </div>
	        <div className="row">
				{deallist}
		    </div>
		</div>        
    )
  }
}

export default DealCenter;