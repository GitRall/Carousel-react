import React from 'react';
import './Carousel.css'
import Image from './Image'
import Indicator from './Indicator';

class Carousel extends React.Component {
  constructor(props){
    super(props);
    this.activeRef = React.createRef();
    this.onClickIndicator = this.onClickIndicator.bind(this);
  }
  componentDidMount(){
    this.carouselInterval = setInterval(() => {
      this.props.onCarouselChange();
    }, 5000)
  }
  componentWillUnmount(){
    clearInterval(this.carouselInterval);
  }
  onClickIndicator(e){
    let target = e.target;
    this.props.onIndicatorClick(target);

    clearInterval(this.carouselInterval);
    this.carouselInterval = setInterval(() => {
      this.props.onCarouselChange();
    }, 5000)
  }
  render(){
    return(
      <div className='carousel'>
        <Image images={this.props.images} carouselIndex={this.props.carouselIndex}></Image>
        <Indicator onIndicatorClick={this.onClickIndicator} imagesLength={this.props.imagesLength} carouselIndex={this.props.carouselIndex}></Indicator>
      </div>
    )
  }
}

export default Carousel
