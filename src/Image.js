import React from 'react';

const Image = (props) => {
  const position = `-${props.carouselIndex}00%`;
  const imgArray = props.images.map((img) => {
    return (
      <img src={img.image} alt={img.alt} key={img.image}></img>
    )
  })
  return (
    <div style={{left: position}} className='carousel__img-wrapper'>
      {imgArray}
    </div>
  )
}

export default Image
