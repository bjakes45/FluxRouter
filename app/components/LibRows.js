import React from 'react';
import ItemPanel from './ItemPanel'


class LibRows extends React.Component {
  render() {
    var totalItems  = this.props.totalItems;
    var itemsPerRow = this.props.itemsPerRow;
    var numRows = this.props.numRows;
    var itemlist = [];
    var items = [];
		
    for (var i = 1; i <= totalItems; i++) {
        	items.push({name: i, id: i});
        }	
       	var itemlist = items.map(function(item){
    		return(
        	<ItemPanel key={item.id} name={item.name}/>
      		)
    	  });
        items = [];
		return (
			<div className="row display">
        		{itemlist}
      		</div>	
		)
	}
}

export default LibRows;