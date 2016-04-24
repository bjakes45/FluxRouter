import React from 'react';
import BizPanel from './BizPanel'
import BizRows from './BizRows'



class CompanyLib extends React.Component {
  render() {
    var totalBiz = 24,
        bizPerRow = 6, //Change this if you change the View.
        numRows  = totalBiz/bizPerRow,
        bizs = [],
        bizList = [];

    //genreate list of items
    for (var i = 1; i <= totalBiz; i++) {
        bizs.push({name: i, id: i});
    }
    var bizlist = bizs.map(function(biz){
    	return(
        <BizPanel key={biz.id}name={biz.name}/>
      )
    });
    return (
      <div className='panel display'>
        <h2>&nbsp;<b>All Companies:</b></h2>
        <div className="row display">
            {bizlist}
        </div>
        <BizRows totalBiz={totalBiz} bizPerRow={bizPerRow} numRows={numRows} bizlist={bizlist} />
      </div>
    );
  }
}

export default CompanyLib;