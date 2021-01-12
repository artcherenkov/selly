import React from 'react';

import { MAX_PHOTOS_COUNT } from '../../../../const';
import { range } from '../../../../utils';

const ImageNavigation = ({ count, activePhoto, setActivePhoto }) => {
  const resCount = count > MAX_PHOTOS_COUNT ? MAX_PHOTOS_COUNT : count;
  return (
    <div className="product__image-navigation">
      {range(resCount).map((item, i) => (
        <span
          key={`photo-${i}`}
          className={`product__navigation-item ${i === activePhoto ? 'product__navigation-item--active' : ''}`}
          style={{ width: '100%', zIndex: 300 }}
          onClick={() => setActivePhoto(i)}
        />
      ))}
    </div>
  );
};

export default ImageNavigation;
