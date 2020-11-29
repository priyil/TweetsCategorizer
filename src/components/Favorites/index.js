import React from 'react';

const Favorites = ({data}) => {
  const renderFavorites = () => {
    return (
      <>
       { data.map((favoriteItem) => {
         return (
           <div>{favoriteItem.created_at}</div>
         )
       })}
      </>
    )
  }
  return (
    <div>
      { renderFavorites() }
    </div>
  );
}


export default Favorites;