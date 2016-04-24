import React from 'react';

class MsgPanel extends React.Component {
  render() {
    return (
      <div className='well display'>
      	<div className="pull-right">
          <button><span className="glyphicon glyphicon-repeat"></span></button>&nbsp; 
      		<button><span className="glyphicon glyphicon-trash"></span></button> 
      	</div>
      	<h4>Subject</h4>
        Hello from MsgPanel Component{this.props.name}
      </div>
    );
  }
}

export default MsgPanel;