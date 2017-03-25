import React from 'react'; 

import Carousel from '../Carousel/Carousel';
import Button from '../Button/Button';
import './News.styl';

const News = ({ items }) => {
    return (
        <div className="news">
            <Carousel>
                {items.map(getArticle)}
            </Carousel>
        </div>
    );
}

const getArticle = ({ title, info, link }) => { 
    const [, firstWordTitle, restTitle ] = /(\w+)(.+)/.exec(title);

    return (
        <div className="news__article">
            <h2 className="news__article-title">
                <span className='news__article-title-first-word'>
                    {firstWordTitle}
                </span>
                {restTitle}    
            </h2>
            <span className="news__article-info">{info}</span>
            <div className="news__article-button">
                <Button text='Learn more' isTransparent={true} />
            </div>
        </div>
    );
}; 

export default News;