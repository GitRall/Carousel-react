import React from 'react';
import './Carousel.css'



class Carousel extends React.Component {
  constructor(props){
    super(props);
    this.prevRef = React.createRef();
    this.activeRef = React.createRef();
    this.nextRef = React.createRef();
  }
  componentDidMount(){
    this.carouselInterval = setInterval(() => {
      this.props.onCarouselChange();
    }, 5000)
  }
  componentWillUnmount(){
    clearInterval(this.carouselInterval);
  }
  render(){
    return(
      <div className='carousel'>
        <img ref={this.prevRef} className='carousel__prev-img' src={this.props.prevImage.image} alt={this.props.prevImage.alt}></img>
        <img ref={this.activeRef} className='carousel__active-img' src={this.props.activeImage.image} alt={this.props.activeImage.alt}></img>
        <img ref={this.nextRef} className='carousel__next-img' src={this.props.nextImage.image} alt={this.props.nextImage.alt}></img>
      </div>
    )
  }
}

export default Carousel
