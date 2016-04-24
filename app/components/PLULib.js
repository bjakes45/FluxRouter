import React from 'react';
import {Link} from 'react-router'
import ItemPanel from './ItemPanel'
import PLURows from './PLURows'


class PLULib extends React.Component {
  render() {
    var totalItems = 1444,
        itemsPerRow = 6, //Change this if you change the View.
        numRows  = totalItems/itemsPerRow;
        
    return (
      <div className='panel display'>
        <div className='row'>
            <div className='col-sm-6'>
                <h2>&nbsp;<b>All PLU Items:</b></h2>
            </div>
            <div className='col-sm-6'>
                <br/>
                <h4><Link to="/items">UPC Codes</Link> | <Link to="/plu">PLU Codes</Link></h4>
            </div>
        </div>       
        <PLURows totalItems={totalItems} itemsPerRow={itemsPerRow} numRows={numRows}/>
      </div>
    );
  }
}

export default PLULib;