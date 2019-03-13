import React, { Component } from 'react';
import './App.css';
import Carousel from './Carousel';
import ball from './images/ball.jpg';
import butterflies from './images/butterflies.jpg';
import city from './images/city.jpg';
import flower from './images/flower.jpg';
import leaf from './images/leaf.jpg';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {images: [
      {image: ball, alt: 'ball'},
      {image: butterflies, alt: 'butterflies'},
      {image: city, alt: 'city'},
      {image: flower, alt: 'flower'},
      {image: leaf, alt: 'leaf'}
    ], carouselIndex: 0}
    this.onCarouselChange = this.onCarouselChange.bind(this);
    this.onIndicatorClick = this.onIndicatorClick.bind(this);
  }

  onCarouselChange(e){
    let newIndex = this.state.carouselIndex >= this.state.images.length - 1 ? 0 : this.state.carouselIndex + 1;
    this.setState({carouselIndex: newIndex});
  }
  onIndicatorClick(e){
    this.setState({carouselIndex: e.target.value})
    console.log(e.target.value);
    console.log('ho');
  }

  render() {
    return (
      <div className="App">
        <Carousel onIndicatorClick={this.onIndicatorClick} imagesLength={this.state.images.length} carouselIndex={this.state.carouselIndex} images={this.state.images} onCarouselChange={this.onCarouselChange}/>
      </div>
    );
  }
}

export default App;
