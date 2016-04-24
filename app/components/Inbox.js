import React from 'react';
import MsgPanel from './MsgPanel'

class Inbox extends React.Component {
  render() {
 	 var totalMsg  = 4;
    var msglist = [];
    var msgs = [];

		
    for (var i = 1; i <= totalMsg; i++) {
        	msgs.push({name: i, id: i});
        }	
       	var msglist = msgs.map(function(msg){
    		return(
        	<MsgPanel key={msg.id} name={msg.name}/>
      		)
    	  });
        msgs = [];
		return (
			<div className="panel display">
        		<br/>
        		{msglist}
      		</div>	
		)
	}
}

export default Inbox;