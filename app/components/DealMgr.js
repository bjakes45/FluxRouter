import React from 'react';
import {Link} from 'react-router';

class DealMgr extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='col-sm-3'>
          <Link to="/dealmgr"><div className='panel text-center display'><h4>Active Deals</h4></div></Link>
          <Link to="/pastdls"><div className='panel text-center display'><h4>Past Deals</h4></div></Link>        
        </div>
        <div className='col-sm-9'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default DealMgr;