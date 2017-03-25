import React from 'react';

import Link from '../Link/Link';
import './Menu.styl';

const Menu = ({ theme = '' }) => {
    const linksText = [
        'menu',
        'about',
        'work',
        'services',
        'blog'
    ];

    return (
        <ul className={`menu menu_${theme}`}>
            {renderLinks(linksText)}
        </ul>
    );
}

const renderLinks = (linksText) => (
    linksText.map((linkText) => (
        <li className='menu__link'>
            <Link text={linkText} />
        </li>
    ))
);

export default Menu;