import React from 'react';

import Employee from '../Employee/Employee';
import './EmployeeGrid.styl';

const EmployeeGrid = ({ employees }) => (
  <div className='employee-grid'>
    { employees.map(getEmployeeItem) }
  </div>
);

const getEmployeeItem = (employee) => (
  <div className="employee-grid__item">
    <Employee {...employee} />
  </div>
);

export default EmployeeGrid;