import React from 'react';

class Scanner extends React.Component {
	render(){
		return(
	        <div className="modal fade modal-md" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
  				<div className="modal-dialog">
				    <div className="modal-content text-center">
				        <div className="modal-header">
				        	<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					        <h4 className="modal-title" id="myModalLabel">UPC Scanner</h4>
					    </div>
					    <div className="modal-body">
						    <div className="panel">
						    	<h4>&nbsp;Coming Soon!</h4>
						    </div>
					    </div>
					    <div className="modal-footer">
						    <div className="well">
					       		<button type="button" className="btn btn-primary disable">Product Page</button>
					       		<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
					    	</div>
					    </div>
					</div>
				</div>
			</div>			
		)
	}	
}

export default Scanner;
