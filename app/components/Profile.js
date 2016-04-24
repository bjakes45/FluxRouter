import React from 'react';
import DealsPanel from './DealsPanel';
import {Link} from 'react-router';

class Profile extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='col-sm-3'>
          <div className='panel text-center display'>
          	<h4>Username</h4>
   			<img src="http://placehold.it/160x160/fdff00/000000?text=No+Picture+Provided"/>
          	<h4>Location</h4>
          	<h4>Age</h4>
          	<h4><span className="glyphicon glyphicon-star"/>Rating</h4>

          </div>
        </div>
        <div className='col-sm-9'>
        	{this.props.children}
        </div>
      </div>
    );
  }
}

export default Profile;