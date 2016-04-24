import React from 'react';
import {Link} from 'react-router';

class MsgPage extends React.Component {
  render(){  
    return (
      <div className='row'>
        <div className='col-sm-3'>
          <Link to="/msg"><div className='panel text-center display'><h4>Inbox</h4></div></Link>
          <Link to="/newmsg"><div className='panel text-center display'><h4>New Message</h4></div></Link>        
        </div>
        <div className='col-sm-9'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MsgPage;