import React, { Component } from 'react';


const Prev = (props) => {
  function prevClick(e){
    props.onPrevClick();
    props.restartInterval();
  }
  return(
    <div className='carousel__prev-btn' onClick={prevClick}>
    <i className="fas fa-chevron-left carousel__icon"></i>
    </div>
  )
}

export default Prev;
