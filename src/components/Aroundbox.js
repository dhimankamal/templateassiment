import React from 'react'

const AroundBox = props => {
  return (
    <>
      <div className='col-md-3'>
        <div className='card shadow-lg mb-5 bg-body rounded'>
          <img src={props.imageUrl} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>
              {props.title}
            </h5>
            <p className='card-text'>{props.text}</p>
            <a href='#' className='btn'>
              Keep reading...
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default AroundBox
