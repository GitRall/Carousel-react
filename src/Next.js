import React, { Component } from 'react';


const Next = (props) => {
  function nextClick(e){
    props.onNextClick();
    props.restartInterval();
  }
  return(
    <div className='carousel__next-btn' onClick={nextClick}>
      <i className="fas fa-chevron-right carousel__icon"></i>
    </div>
  )
}

export default Next;
