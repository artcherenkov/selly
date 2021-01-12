import React from 'react';
import Card from '../card/card';

const MainList = ({ products, setIsPopupShown }) => {
  return (
    <ul className="results__list">
      {products.map((product, i) =>
        <Card key={`product-${i}`} product={product} setIsPopupShown={setIsPopupShown} />
      )}
    </ul>
  );
};

export default MainList;
