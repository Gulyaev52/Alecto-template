import React from 'react';

import Menu from '../Menu/Menu'; 
import './Footer.styl'; 

const Footer = () => (
    <div className="footer">   
        <span className="footer__copyright">
            All Rights Reversed by Alecto
        </span>
        <div className="footer__menu">
            <Menu theme='darkness' />
        </div>  
    </div>
);

export default Footer;