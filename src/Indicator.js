import React from 'react';

const Indicator = (props) => {
  const indicatorArray = [];
  for(let i = 0; i < props.imagesLength; i++){
    let indicatorBtn;
    if(props.carouselIndex === i){
      indicatorBtn = <button key={i} value={i} onClick={props.onIndicatorClick} className='carousel__indicator carousel__indicator-active'></button>
    }
    else{
      indicatorBtn = <button key={i} value={i} onClick={props.onIndicatorClick} className='carousel__indicator'></button>
    }
    indicatorArray.push(indicatorBtn);
  }
  return(
    <div className='carousel__indicator-wrapper'>
      {indicatorArray}
    </div>
  )
}


export default Indicator
