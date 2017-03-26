import React from 'react';

import './Services.styl'; 
import Article from '../Article/Article';
import ListService from '../ListService/ListService';


const Services = () => { 
    const servicesInfo = [
        'portfolio',
        'design',
        'branding',
        'development'
    ].map((serviceName) => ({
        name: serviceName,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum augue sed est porttitor, ac blandit nisl posuere.',
        iconName: 'rocket'
    }));

    return (
        <div className="services">
            <Article 
                title='out services'
                subtitle='Nam varius accumsan elementum. Aliquam fermentum eros in suscipit scelerisque.'
            >
                <div className="services__content">
                     <ListService servicesInfo={servicesInfo} />
                </div>
            </Article>
        </div>
    );
}

export default Services;