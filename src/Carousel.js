import React from 'react';
import './Carousel.css'
import Image from './Image'
import Indicator from './Indicator';
import Next from './Next';
import Prev from './Prev';

class Carousel extends React.Component {
  constructor(props){
    super(props);
    this.activeRef = React.createRef();
    this.onClickIndicator = this.onClickIndicator.bind(this);
    this.restartInterval = this.restartInterval.bind(this);
  }
  componentDidMount(){
    this.carouselInterval = setInterval(() => {
      this.props.onNext();
    }, 5000)
  }
  componentWillUnmount(){
    clearInterval(this.carouselInterval);
  }
  onClickIndicator(e){
    let target = e.target;
    this.props.onIndicatorClick(target);
    this.restartInterval();
  }
  restartInterval(){
    clearInterval(this.carouselInterval);
    this.carouselInterval = setInterval(() => {
      this.props.onNext();
    }, 5000)
  }
  render(){
    return(
      <div className='carousel'>
        <Image images={this.props.images} carouselIndex={this.props.carouselIndex}></Image>
        <Indicator onIndicatorClick={this.onClickIndicator} imagesLength={this.props.imagesLength} carouselIndex={this.props.carouselIndex}></Indicator>
        <Prev onPrevClick={this.props.onPrev} restartInterval={this.restartInterval}/>
        <Next onNextClick={this.props.onNext} restartInterval={this.restartInterval}/>
    </div>
    )
  }
}

export default Carousel
