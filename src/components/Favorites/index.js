import React from 'react';

const Favorites = ({data}) => {
  return (
    <div>
      Favorites Date: {data[0].created_at}
    </div>
  );
}


export default Favorites;