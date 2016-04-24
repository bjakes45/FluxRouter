import React from 'react';
import DealsPanel from './DealsPanel';
import {Link} from 'react-router';

class NewHost extends React.Component {
  render() {
  	return(
      <div className='panel display text-center'>
      	<h3><b>Considering becoming a Host?</b></h3>
      	<h5>Hosts get access to a whole bunch of exclusive features and content on the site.<br/>
      	Only Hosts may post Deals for our community to participate in and they are the only<br/>
      	ones on the site that may accumulate and spen Cred to claim Leftover items in Deals.<br/><br/>
      	Shopidarity is Cooperatively operated by our Hosts, that act as the Member/Owners of our Cooperative.<br/>
      	Each Host gets to vote on the budget and for the Board of Directors at our Annual General Meeting if they want.<br/>
      	When our Cooperative is profitable, the Hosts will recieve patronage payments dependant on their participation in our community.<br/><br/>
      	To become a Host a User must purchase a Member Share of the Cooperative to become a partial Owner of the enterprise.<br/>
      	Hosts are alo required to satisfy a minimal annual Membership Fee to cover basic operating costs and ensure our collective success.</h5>
      <br/>
      <h4>Current Cost for Member Share: $20</h4>
      <h4>Current Annual Membership Fee: $20</h4>
      <br/>
      <h4>First Year Total: $40</h4>
      <h4>Subsequent Years: $20</h4>
      <button className='btn btn-default'>Purchase Membership</button>
      <br/><br/>
      </div>

    );
  }
}

export default NewHost;