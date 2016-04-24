import React from 'react';

class NewMsg extends React.Component {
  render() {
    return (
    	<div className="panel display">
      		<br/>
		    <div className='well display'>
      			<div className="pull-right">
      			<button><span className="glyphicon glyphicon-trash"></span></button> 
      			</div>
      			<h4>Subject</h4>
        		Hello from NewMsg Component
      		</div>
    	</div>
    );
  }
}

export default NewMsg;