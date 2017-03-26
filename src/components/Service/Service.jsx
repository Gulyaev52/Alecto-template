import React from 'react';
 
import './Service.styl';
import Icon from '../Icon/Icon';

const Service = ({ name, description, iconName }) => (
    <div className="service">
        <span className="service__icon">
            <Icon name={iconName} size='small' />
        </span>
        <h1 className="service__name">{name}</h1>
        <p className="service__description">{description}</p>
    </div>
);

export default Service;