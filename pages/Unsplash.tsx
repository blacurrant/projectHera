import React, { useEffect, useState } from 'react';
import SearchBar from '@/Components/SearchBar';
import Footer from '@/Components/Footer';
import searchImages from './api/SearchImages';


const Unsplash = () => {

  const [images, setImages] = useState([]);

  const handleSubmit = async(term) => {
    const result = await searchImages(term);

    setImages(result);
  }

  return (
    <div className='container mx-auto'>
      <SearchBar onSubmit={handleSubmit} />
      <Footer images={images} />
    </div>
  )
}

export default Unsplash