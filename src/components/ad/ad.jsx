import React, { useState } from 'react';
import { connect } from 'react-redux';

import { toggleForm } from '../../store/action';
import { getActiveAd } from '../../store/reducers/app-state/selectors';
import { formatDate, formatStreet } from '../../utils';

const Ad = ({ activeAd, handleCloseBtnClick }) => {
  const { name, price, photos, seller, description, filters, address, publishDate } = activeAd;
  const { fullname, rating } = seller;
  const { city, street, building } = address;

  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <section className="popup popup--active">
      <div className="popup__inner">
        <button className="popup__close" type="button" aria-label="Закрыть" onClick={handleCloseBtnClick}>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L9.41421 8L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L8 9.41421L1.70711 15.7071C1.31658 16.0976 0.683418 16.0976 0.292893 15.7071C-0.0976311 15.3166 -0.0976311 14.6834 0.292893 14.2929L6.58579 8L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z"/>
          </svg>
        </button>
        <div className="popup__date">{formatDate(publishDate)}</div>
        <h3 className="popup__title">{name}</h3>
        <div className="popup__price">{price.toLocaleString()} ₽</div>
        <div className="popup__columns">
          <div className="popup__left">
            <div className="popup__gallery gallery">
              <button className="gallery__favourite fav-add">
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="gallery__main-pic">
                <img src={photos[activePhoto]} width="520" height="340" alt={name}/>
              </div>
              <ul className="gallery__list">
                {photos.map((item, i) => (
                  <li key={`photo-${i}`} className={`gallery__item ${activePhoto === i ? 'gallery__item--active' : ''}`}>
                    <img src={item} alt={name} width="124" height="80" onClick={setActivePhoto.bind(this, i)}/>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="popup__chars chars">
              {Object.entries(filters).map(([key, val], i) => (
                <li key={`addition-${i}`} className="chars__item">
                  <div className="chars__name">{key}</div>
                  <div className="chars__value">{val}</div>
                </li>
              ))}
            </ul>
            <div className="popup__seller seller seller--good">
              <h3>Продавец</h3>
              <div className="seller__inner">
                <span className="seller__name">{fullname}</span>
                <div className="seller__rating"><span>{rating}</span></div>
              </div>
            </div>
            <div className="popup__description">
              <h3>Описание товара</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="popup__right">
            <div className="popup__map">
              <img src="img/map.jpg" width="268" height="180" alt="Москва, Нахимовский проспект, дом 5"/>
            </div>
            <div className="popup__address">{city}, {formatStreet(street)}, дом {building.replace('д.' , '')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  activeAd: getActiveAd(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleCloseBtnClick() {
    dispatch(toggleForm());
  }
});

export { Ad };
export default connect(mapStateToProps, mapDispatchToProps)(Ad);
