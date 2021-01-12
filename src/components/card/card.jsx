import React, { useState } from 'react';
import ImageNavigation from './components/image-navigation/image-navigation';
import { MAX_PHOTOS_COUNT } from '../../const';

const Card = ({ product, setIsPopupShown }) => {
  const { address, name, price, photos } = product;
  const { city, street } = address;

  const [activePhoto, setActivePhoto] = useState(0);

  const showedPhotosCount = photos.length > MAX_PHOTOS_COUNT ? MAX_PHOTOS_COUNT : photos.length;
  const shouldShowPhotoOverlay = (showedPhotosCount < photos.length) && (activePhoto === showedPhotosCount - 1);

  return (
    <li className="results__item product">
      <button className="product__favourite fav-add" type="button" aria-label="Добавить в избранное">
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="product__image">
        <div className={`product__image-more-photo ${shouldShowPhotoOverlay ? '' : 'hidden'}`}>
          +{photos.length - showedPhotosCount} фото
        </div>
        <img src={photos[activePhoto]} alt={name} />
        <ImageNavigation count={photos.length} activePhoto={activePhoto} setActivePhoto={setActivePhoto} />
      </div>
      <div className="product__content">
        <h3 className="product__title">
          <button onClick={() => setIsPopupShown(true)}>
            {name}
          </button>
        </h3>
        <div className="product__price">{price.toLocaleString()} ₽</div>
        <div className="product__address">{city}, улица {street.replace('ул.', '')}</div>
        <div className="product__date">2 часа назад</div>
      </div>
    </li>
  );
};
export default Card;
