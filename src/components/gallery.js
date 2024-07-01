import React from 'react';
import {  Link } from 'react-router-dom';
import '../App.css';
import { Box } from '@chakra-ui/react';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Gallery = ({ images }) => {
  return (
      <Box
      pt={'100px'}
      display={'grid'}
      gridTemplateColumns={'repeat(auto-fill, minmax(200px, 1fr))'}
      gridGap={'20px'}
      width={'100%'}
      height={'auto'}
      px={'20px'}
      >
        {images.map((image, index) => (
          <Box height={'200px'} border={'1px solid #ccc'} borderRadius={'5px'} overflow={'hidden'}  className="image-card">
          <Link  to={`/details/${image.date}`}>
              <LazyLoadImage w={'100%'} h={'200px'} objectFit={'cover'} className='skeleton' src={image.url} alt={image.title}  />
            </Link>
          </Box>
          ))}
      </Box>
  );
};

export default Gallery;
