import React from 'react';

import Link from '../Link/Link';
import './Menu.styl';

const Menu = ({ theme }) => {
    const linksText = [
        'menu',
        'about',
        'work',
        'services',
        'blog'
    ];

    return (
        <ul className={[
                'menu',
                theme ? `menu_${theme}` : ''
            ].join(' ')}
        >
            {renderLinks(theme, linksText)}
        </ul>
    );
}

const renderLinks = (theme, linksText) => (
    linksText.map((linkText) => (
        <li className='menu__link'>
            <Link text={linkText} theme={theme} />
        </li>
    ))
);

export default Menu;