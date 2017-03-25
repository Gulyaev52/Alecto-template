import React from 'react';
import './Employee.styl';

const Employee = ({ photo, name }) => (
  <div className='employee'>
    <img className='employee__photo' src={photo} />
    <div className='employee__description'>
      <span className='employee__name'>{name}</span>
    </div>
  </div>
);

export default Employee;