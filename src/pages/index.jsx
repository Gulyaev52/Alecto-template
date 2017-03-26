import React from 'react';
import ReactDOM from 'react-dom'; 
 
import Header from 'components/Header/Header';
import Team from 'components/Team/Team';
import Pricing from 'components/Pricing/Pricing';
import Jumbotron from 'components/Jumbotron/Jumbotron';
import Services from 'components/Services/Services';
import EmployeeCarousel from 'components/EmployeeCarousel/EmployeeCarousel';
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
    <Jumbotron 
      title='Lorem ipsum'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum augue sed est porttitor, ac blandit nisl posuere. Pellentesque hendrerit suscipit mi eu lobortis. Curabitur consectetur enim id elementum accumsan. Quisque metus purus, iaculis id tincidunt non, blandit quis sapien. '
      theme='darkness'
      imgSrc='https://html5book.ru/wp-content/uploads/2015/10/snow-road.jpg' 
      direction='reverse'
    />
    <Jumbotron 
      title='Lorem ipsum'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum augue sed est porttitor, ac blandit nisl posuere. Pellentesque hendrerit suscipit mi eu lobortis. Curabitur consectetur enim id elementum accumsan. Quisque metus purus, iaculis id tincidunt non, blandit quis sapien. '
      imgSrc='https://html5book.ru/wp-content/uploads/2015/10/snow-road.jpg' 
    />
    <EmployeeCarousel />
    <Services />
    <Team />
    <Pricing />
    <Jumbotron 
      title='Lorem ipsum'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum augue sed est porttitor, ac blandit nisl posuere. Pellentesque hendrerit suscipit mi eu lobortis. Curabitur consectetur enim id elementum accumsan. Quisque metus purus, iaculis id tincidunt non, blandit quis sapien. '
      imgSrc='https://html5book.ru/wp-content/uploads/2015/10/snow-road.jpg' 
    />
  </div>,
  document.body
);