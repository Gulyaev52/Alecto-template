import React from 'react';

import Button from '../Button/Button';
import './Jumbotron.styl';

const Jumbotron = ({ title, description, imgSrc, direction, theme }) => (
  <div className={[
           'jumbotron',
           direction ? `jumbotron_direction_${direction}` : '',
           theme ? `jumbotron_theme_${theme}` : ''
       ].join(' ')}
  > 
      <div className="jumbotron__info">
          <h1 className="jumbotron__title">{title}</h1>
          <p className="jumbotron__description">{description}</p>
          <div className="jumbotron__button">
              <Button text='Learn more' isTransparent={false} />
          </div>
      </div>
      <img src={imgSrc} className="jumbotron__image"/>
  </div>
);

export default Jumbotron;