import React from 'react'

const Departmentbox = props => {
  return (
    <>
      <div className='col-md-4'>
        <div className='box'>
          <img src={props.imageUrl} alt='image' />
          <h3>Online Education</h3>
        </div>
      </div>
    </>
  )
}

export default Departmentbox
