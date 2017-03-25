import React from 'react';

import './CardPrice.styl'; 


const CardPrice = (props) => {
  const { 
    price,
    description,
    license = 'Lorem ipsum license'
  } = props;
  return (
    <div className='card-price'>
      <div className='card-price__header'>
        <span className='card-price__price'>
          {price}
        </span>
        <span className='card-price__license'>
          {license}
        </span>
      </div>
      <div className='card-price__description'>
        {description}
      </div>
      <button className='card-price__button-purchase'>
        purchase
      </button>
    </div>
  );
}

export default CardPrice;