import React from 'react';

import './Pricing.styl';
import Article from '../Article/Article';
import CardPrice from '../CardPrice/CardPrice';

const Pricing = () => { 
    const pricesInfo = [29, 39, 49, 109]
        .map(price => ({
            price,
            description: `Lorem ipsum dolor sit amen
                Lorem ipsum dolor sit amen
                Lorem ipsum dolor sit amen
                Lorem ipsum dolor sit amen`
        }));

    return (
        <div className="pricing">
            <Article 
                title='Pricing'
                subtitle='Nam varius accumsan elementum. Aliquam fermentum eros in suscipit scelerisque.'
            > 
                <div className="pricing__content">
                    {pricesInfo.map(getCardPriceItem)}
                </div>
            </Article>
        </div>
    );
}

const getCardPriceItem = (priceInfo) => (
    <div className="pricing__card-price">
        <CardPrice {...priceInfo} />
    </div>
);

export default Pricing;