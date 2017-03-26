import React from 'react';
 
import './ListService.styl';
import Service from '../Service/Service';

const ListService = ({ servicesInfo }) => (
    <div className="list-service"> 
        {servicesInfo.map(getServiceItem)}
    </div>
);

const getServiceItem = (serviceInfo) => (
    <div className="list-service__item">
        <Service {...serviceInfo} />
    </div>
);

export default ListService;