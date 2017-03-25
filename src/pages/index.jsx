import React from 'react';
import ReactDOM from 'react-dom'; 

import News from 'components/News/News';
import Header from 'components/Header/Header';
import Team from 'components/Team/Team';
import Pricing from 'components/Pricing/Pricing';
import 'theme/global.styl';
import './index.styl';


// const news = new Array(5).fill({
//   title: 'Alecto is simple PSD Template',
//   info: 'Nam varius accumsan elementum aliquam',
//   link: '#'
// });

// ReactDOM.render(
//   <News items={news}/>, 
//   document.body
// );

// ReactDOM.render(
//   <Article title='our services' subtitle='Nam varius accumsan elementum. Aliquam fermentum eros in suscipit scelerisque.' />, 
//   document.body
// );

ReactDOM.render(
  <div>
    <Header />
    <Team />
    <Pricing />
  </div>,
  document.body
);

