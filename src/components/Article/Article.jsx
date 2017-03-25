import React from 'react';
import './Article.styl';

const Article = ({ title, subtitle, children, theme = '' }) => {
    return (
        <div className={`article article_${theme}`}>
            <h1 className="article__title">{title}</h1>
            <h2 className="article__subtitle">{subtitle}</h2>
            <div className="article__content">
                {children}
            </div>
        </div>
    );
}

export default Article;