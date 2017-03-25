import React from 'react';
import './Carousel.styl';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentSlide: props.currentSlide || 1,
      slidesStyle: {
        marginLeft: '0rem'
      },
      items: props.children
    };
  }

  shiftLast(items) { 
    return [...items.slice(-1), ...items.slice(0, -1)];
  }

  shiftFirst(items) { 
    return [...items.slice(1), items[0]];
  } 
  
  prevSlide() {
    this.setState(({ items, currentSlide, slidesStyle: { marginLeft } }) => ({
      items: this.shiftLast(items),
      currentSlide: currentSlide - 1 == 0 ? items.length : currentSlide - 1,
      slidesStyle: {
        marginLeft: `${parseInt(marginLeft) + 60}rem`
      }
    }));
  }
  
  nextSlide() {
    this.setState(({ items, currentSlide, slidesStyle: { marginLeft } }) => ({
      items: this.shiftFirst(items),
      currentSlide: currentSlide + 1 > items.length ? 1 : currentSlide + 1,
      slidesStyle: {
        marginLeft: `${parseInt(marginLeft) - 60}rem`
      }
    }));
  }
  
  renderSlides(children, currentSlide) {
    return (
      children.map((child) => (
        <li className='carousel__slide'>
          {child}
        </li>
      ))
    );
  }
  
  renderIndicators(countSlides, currentSlide) {
    const range = number => new Array(number).fill(null);
    
    return (
      range(countSlides).map((_, i) => (
        <li className={[
              'carousel__indicator',
              currentSlide == (i + 1) ? 'carousel__indicator_active' : ''
            ].join(' ')}>
        </li>
      ))
    );
  }
  
  render() { 
    const { items, currentSlide, slidesStyle } = this.state;
    
    return (
      <div className='carousel'>
        <button 
          className='carousel__control carousel__control_prev'
          onClick={this.prevSlide.bind(this)}
        >
        </button>
        <div className='carousel__gallery'>
          <ul className='carousel__slides' style={slidesStyle}>
            {this.renderSlides(items, currentSlide)}
          </ul>
          <ul className='carousel__pagination'>
            {this.renderIndicators(items.length, currentSlide)}
          </ul>
        </div>
        <button 
          className='carousel__control carousel__control_next'
          onClick={this.nextSlide.bind(this)}
        >
        </button>
      </div>
    );
  }
}

export default Carousel;