import React from 'react';
import {Link} from 'react-router'
import ItemPanel from './ItemPanel'
import LibRows from './LibRows'


class Library extends React.Component {
  render() {
    var totalItems = 24,
        itemsPerRow = 6, //Change this if you change the View.
        numRows  = totalItems/itemsPerRow,
        items = [],
        itemList = [];

    return (
      <div className='panel display'>
        <div className='row'>
            <div className='col-sm-6'>
                <h2>&nbsp;<b>All UPC Products:</b></h2>
            </div>
            <div className='col-sm-6'>
                <br/>
                <h4><Link to="/items">UPC Codes</Link> | <Link to="/plu">PLU Codes</Link></h4>
            </div>
        </div>
        <LibRows totalItems={totalItems} itemsPerRow={itemsPerRow} numRows={numRows} />
      </div>
    );
  }
}

export default Library;