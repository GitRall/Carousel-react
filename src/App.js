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
    this.images = [
      {image: ball, alt: 'ball'},
      {image: butterflies, alt: 'butterflies'},
      {image: city, alt: 'city'},
      {image: flower, alt: 'flower'},
      {image: leaf, alt: 'leaf'}
    ];
    this.activeImgCount = 0;
    this.prevImgCount = this.images.length - 1;
    this.nextImgCount = 1;
    this.state = {prevImage: this.images[this.prevImgCount], image: this.images[this.activeImgCount], nextImage: this.images[this.nextImgCount]}
    this.onCarouselChange = this.onCarouselChange.bind(this);
  }

  onCarouselChange(e){
    this.activeImgCount = this.activeImgCount >= this.images.length - 1 ? 0 : this.activeImgCount + 1;
    this.prevImgCount = this.prevImgCount >= this.images.length - 1 ? 0 : this.prevImgCount + 1;
    this.nextImgCount = this.nextImgCount >= this.images.length - 1 ? 0 : this.nextImgCount + 1;
    this.setState({prevImage: this.images[this.prevImgCount], image: this.images[this.activeImgCount], nextImage: this.images[this.nextImgCount]})
  }

  render() {
    return (
      <div className="App">
        <Carousel prevImage={this.state.prevImage} activeImage={this.state.image} nextImage={this.state.nextImage} onCarouselChange={this.onCarouselChange}/>
      </div>
    );
  }
}

export default App;
