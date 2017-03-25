import React from 'react';

import Menu from '../Menu/Menu';
import News from '../News/News';
import './Header.styl'; 

const Header = () => {  
    const news = new Array(5).fill({
        title: 'Alecto is simple PSD Template',
        info: 'Nam varius accumsan elementum aliquam',
        link: '#'
    });

    return (
        <div className="header">  
            <div className="header__nav">
                <div className="header__logo">Alecto.</div>
                <div className="header__menu">
                    <Menu />
                </div>
            </div> 
            <div className="header__news">
                <News items={news} />
            </div>
        </div>
    );
} 

export default Header;