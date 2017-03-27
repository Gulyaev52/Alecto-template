import React from 'react';
 
import './Link.styl';

const Link = ({ text, theme }) => (
    <a href="#" className={[
                    'link',
                    theme ? `link_${theme}` : ''
                ].join(' ')}
    >
        {text}
    </a>
);

export default Link;