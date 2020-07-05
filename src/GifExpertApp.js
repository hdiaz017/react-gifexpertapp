import React, { useState } from 'react';

import GifGrid from './components/GifGrid';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
   const [categories, setCategories] = useState([]);
   const handleAdd = (c) => {
      setCategories([c, ...categories]);
   };

   return (
      <div>
         <h2>GifExpertApp</h2>
         <AddCategory handleAdd={handleAdd} />
         <hr />
         <ol>
            {categories.map((c) => (
               <GifGrid key={c} category={c} />
            ))}
         </ol>
      </div>
   );
};

export default GifExpertApp;
