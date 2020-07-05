import React from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

// import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {
   const { data, loading } = useFetchGifs(category);

   const imgs = data.map((img) => <GifGridItem key={img.id} {...img} />);
   return (
      <div>
         <h3>{category}</h3>
         {loading && <p>Aguanta, capo.</p>}
         <div className='card-grid '>{imgs}</div>
      </div>
   );
};

// GifGrid.propTypes = {
//    category: PropTypes.string.isRequired,
// };

export default GifGrid;
