import React from 'react';
import Top10Item from './Top10Item';
import Top10Host from './Top10Host';
import Top10Biz from './Top10Biz';

class Top10 extends React.Component {
  render() {
    var topitems = [
    	{_id: "1i", name: "Item 1", rate:"9.8", deals:"9"},
    	{_id: "2i", name: "Item 2", rate:"9.7", deals:"19"},
    	{_id: "3i", name: "Item 3", rate:"9.7", deals:"31"},
    	{_id: "4i", name: "Item 4", rate:"9.6", deals:"23"},
    	{_id: "5i", name: "Item 5", rate:"9.6", deals:"46"},
    	{_id: "6i", name: "Item 6", rate:"9.5", deals:"62"},
    	{_id: "7i", name: "Item 7", rate:"9.5", deals:"12"},
    	{_id: "8i", name: "Item 8", rate:"9.4", deals:"42"},
    	{_id: "9i", name: "Item 9", rate:"9.4", deals:"5"},
    	{_id: "10i", name: "Item 10", rate:"9.4", deals:"17"}
    ];
    var itemlist = topitems.map(function(item) {
	    return (
            <Top10Item key={item._id} _id={item._id} name={item.name} rate={item.rate} deals={item.deals}/>
        )
    });
    var topbiz = [
    	{_id: "1b", name: "Biz 1", rate:"9.9", deals:"12"},
    	{_id: "2b", name: "Biz 2", rate:"9.8", deals:"40"},
    	{_id: "3b", name: "Biz 3", rate:"9.8", deals:"22"},
    	{_id: "4b", name: "Biz 4", rate:"9.7", deals:"59"},
    	{_id: "5b", name: "Biz 5", rate:"9.5", deals:"43"},
    	{_id: "6b", name: "Biz 6", rate:"9.5", deals:"67"},
    	{_id: "7b", name: "Biz 7", rate:"9.5", deals:"13"},
    	{_id: "8b", name: "Biz 8", rate:"9.5", deals:"51"},
    	{_id: "9b", name: "Biz 9", rate:"9.4", deals:"31"},
    	{_id: "10b", name: "Biz 10", rate:"9.4", deals:"9"}
    ];
    var bizlist = topbiz.map(function(biz) {
        return (
            <Top10Biz key={biz._id} _id={biz._id} name={biz.name} rate={biz.rate} deals={biz.deals}/>
        )
	});
    var tophost = [
        {_id: "1h", name: "Host 1", rate:"9.9", deals:"8"},
        {_id: "2h", name: "Host 2", rate:"9.8", deals:"11"},
        {_id: "3h", name: "Host 3", rate:"9.8", deals:"9"},
        {_id: "4h", name: "Host 4", rate:"9.7", deals:"5"},
        {_id: "5h", name: "Host 5", rate:"9.5", deals:"8"},
        {_id: "6h", name: "Host 6", rate:"9.5", deals:"2"},
        {_id: "7h", name: "Host 7", rate:"9.5", deals:"7"},
        {_id: "8h", name: "Host 8", rate:"9.5", deals:"5"},
        {_id: "9h", name: "Host 9", rate:"9.4", deals:"3"},
        {_id: "10h", name: "Host 10", rate:"9.4", deals:"4"}
    ];
    var hostlist = tophost.map(function(host) {
        return (
            <Top10Host key={host._id} _id={host._id} name={host.name} rate={host.rate} deals={host.deals}/>
        )
    });
    return (
	    <div className='row'>    
	        <div className='col-sm-4'>
	        	<div className="panel top10 text-center">
	        		<h4><b><u>Top 10 Products</u></b></h4>
	        		<ul className='well top10'>{itemlist}</ul>
	        	</div>
	        </div>
	        <div className='col-sm-4'>
	        	<div className="panel top10 text-center">
	        		<h4><u><b>Top 10 Hosts</b></u></h4>
	        		<ul className='well top10'>{hostlist}</ul>
	        	</div>
	        </div>
            <div className='col-sm-4'>
                <div className="panel top10 text-center">
                    <h4><u><b>Top 10 Companies</b></u></h4>
                    <ul className='well top10'>{bizlist}</ul>
                </div>
            </div>
	    </div>
    );
  }
}

export default Top10;