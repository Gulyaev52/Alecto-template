import React from 'react';
import './Button.styl';

const Button = ({ text, isTransparent = true }) => (
    <button className={[
        'button',
        isTransparent ? 'button_transparent' : ''
    ].join(' ')}>
        {text}
    </button>
);

export default Button;