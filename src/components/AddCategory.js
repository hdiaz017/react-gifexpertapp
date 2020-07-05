import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ handleAdd }) => {
   const [serie, setSerie] = useState('');

   const handleChange = (e) => {
      setSerie(e.target.value);
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      handleAdd(serie);
      setSerie('');
   };
   return (
      <form onSubmit={handleSubmit}>
         <input type='text' value={serie} onChange={handleChange} />
      </form>
   );
};

AddCategory.propTypes = {
   handleAdd: PropTypes.func.isRequired,
};

export default AddCategory;
