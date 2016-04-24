import React from 'react';
import ItemPanel from './ItemPanel'


class FavRows extends React.Component {
  render() {
		var numRows = this.props.numRows;
		var itemlist = this.props.itemlist;
		var totalItems  = this.props.totalItems;
        var itemsPerRow = this.props.itemsPerRow;
		var items = [];

		for (var i = itemsPerRow+1; i < (itemsPerRow*2)+1; i++) {
        	items.push({name: i, id: i});
        }	
       	var itemlist = items.map(function(item){
    		return(
        	<ItemPanel key={item.id} name={item.name}/>
      		)
    	});
		return (
			<div className="row display">
        		{itemlist}
      		</div>	
		)
	}
}

export default FavRows;