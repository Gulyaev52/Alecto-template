import React from 'react';

import './EmployeeCarousel.styl'; 
import Carousel from '../Carousel/Carousel';


const EmployeeCarousel = (props) => {
    const employees = new Array(5).fill({
        photo: 'https://html5book.ru/wp-content/uploads/2015/10/snow-road.jpg',
        text: 'Alecto lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        name: 'adam czajkowski',
        profession: 'CEO&FOUNDER at symo.co'
    });

    return (
        <div className="employee-carousel"> 
            <Carousel>
                {employees.map(getEmployeeSlide)}
            </Carousel>
        </div>
    );
}

const getEmployeeSlide = ({ photo, text, name, profession }) => (
    <div className="employee-carousel__slide">
        <img className="employee-carousel__slide-photo" src={photo} />
        <span className="employee-carousel__slide-text">{text}</span>
        <span className="employee-carousel__slide-info">
            <span className="employee-carousel__slide-name">
                {name}. 
            </span>
            <span className="employee-carousel__slide-profession">
                {profession}
            </span>
        </span>
    </div>
);

export default EmployeeCarousel;