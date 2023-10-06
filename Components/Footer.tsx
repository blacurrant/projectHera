import React from 'react'
import ImageShow from './Header';

const Footer = ({ images }) => {

  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image}/>;
  });

  return (
    <div className='bg-gray-900 columns-4 gap-5 py-5'>
      {renderedImages}
    </div>
  )
}

export default Footer