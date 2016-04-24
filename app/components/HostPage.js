import React from 'react';

class HostPage extends React.Component {
  render() {
    return (
      <div className='alert alert-info'>
        Hello from HostPage Component {this.props.params.id}
      </div>
    );
  }
}

export default HostPage;