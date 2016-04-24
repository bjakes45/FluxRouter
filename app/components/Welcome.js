import React from 'react';

class Welcome extends React.Component {
  render() {
		return (
			<div className="col-xs-6">
				<div className="welcome panel panel-default text-center">
					<br/>
			        <img className="img-responsive welcome-pic" src='./img/vintage-female-md.png' height='70%' width='auto' />
					<h2><strong>Let&rsquo;s Buy Together, Because Healthy Local Products Shouldn&rsquo;t be a Priveledge</strong></h2>
				</div>
			</div>
		)
	}
}

export default Welcome;