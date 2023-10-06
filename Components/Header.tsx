import React from 'react'

const ImageShow = ({ image }) => {

  return (
    <div>
      <a href={image.urls.full} > <img className='w-100 mb-5' src={image.urls.small} alt={image.alt_description} /> </a>
    </div>
  )
}

export default ImageShow;