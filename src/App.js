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
    this.onNext = this.onNext.bind(this);
    this.onIndicatorClick = this.onIndicatorClick.bind(this);
    this.onPrev = this.onPrev.bind(this);
  }
  onPrev(e){
    let newIndex = this.state.carouselIndex <= 0 ? this.state.images.length - 1 : this.state.carouselIndex - 1;
    this.setState({carouselIndex: newIndex});
  }
  onNext(e){
    let newIndex = this.state.carouselIndex >= this.state.images.length - 1 ? 0 : this.state.carouselIndex + 1;
    this.setState({carouselIndex: newIndex});
  }
  onIndicatorClick(target){
    let value = target.value;
    value = parseInt(value);
    this.setState({carouselIndex: value})
  }

  render() {
    return (
      <div className="App">
        <Carousel onIndicatorClick={this.onIndicatorClick} onPrev={this.onPrev} imagesLength={this.state.images.length} carouselIndex={this.state.carouselIndex} images={this.state.images} onNext={this.onNext}/>
      </div>
    );
  }
}

export default App;
