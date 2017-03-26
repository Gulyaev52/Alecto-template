import React from 'react';
 
import './Icon.styl';

const Icon = ({ name, theme, size  }) => (
    <span className={[
              'icon',
              name ? `icon_${name}` : '',
              theme ? `icon_theme_${theme}` : '',
              size ? `icon_size_${size}` : ''
          ].join(' ')}
    > 
    </span>
);

export default Icon;