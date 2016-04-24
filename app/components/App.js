import React from 'react';
import Scanner from './Scanner';
import Navbar from './Navbar';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Scanner/>
      	<Navbar hideHost='' hideMod='1' hideMgmt='1'/>
        <div className='menu-offset'>
        	{this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;