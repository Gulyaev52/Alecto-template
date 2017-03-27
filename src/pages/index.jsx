import React from 'react';
import ReactDOM from 'react-dom'; 
 
import Header from 'components/Header/Header';
import Team from 'components/Team/Team';
import Pricing from 'components/Pricing/Pricing';
import Jumbotron from 'components/Jumbotron/Jumbotron';
import Services from 'components/Services/Services';
import EmployeeCarousel from 'components/EmployeeCarousel/EmployeeCarousel';
import Footer from 'components/Footer/Footer';
import 'theme/global.styl';
import './index.styl'; 

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
    <Footer />
  </div>,
  document.body
);