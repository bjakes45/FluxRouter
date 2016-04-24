import React from 'react';
import ItemPanel from './ItemPanel'
import FavRows from './FavRows'



class Favourites extends React.Component {
  render() {
    var totalFavs = 12,
        favsPerRow = 6, //Change this if you change the View.
        numRows  = totalFavs/favsPerRow,
        favs = [],
        favList = [];

    //genreate list of items
    for (var i = 1; i < favsPerRow+1; i++) {
        favs.push({name: i, id: i});
    }
    var favlist = favs.map(function(item){
    	return(
        <ItemPanel key={item.id} name={item.name}/>
      )
    });
    return (
      <div className='panel display'>
        <h2>&nbsp;<b>Your Favourite Items:</b></h2>
        <div className="row display">
            {favlist}
        </div>
        <FavRows totalItems={totalFavs} itemsPerRow={favsPerRow} numRows={numRows} itemlist={favlist} />
      </div>
    );
  }
}

export default Favourites;