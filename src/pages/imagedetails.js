import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { Box, Image, Text, Center } from '@chakra-ui/react';
import Navbar from '../components/navbar';

const API_BASE_URL = 'https://api.nasa.gov/planetary/apod';

const ImageDetail = () => {
  const { date } = useParams();
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImageData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_BASE_URL, {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
            date: date,
            concept_tags: true
          }
        });
        if (!response.data) {
          throw new Error('No data found for the given date');
        }
        setImageData(response.data);
      } catch (error) {
        setError('Error fetching image data: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImageData();
  }, [date]);

  if (loading) {
    return <div style={{paddingTop: '300px'}}><Center><ClipLoader color="#36d7b7" /></Center></div>;
  }

  if (error) {
    return <Box display={'flex'} alignItems={'center'} justifyContent={'center'} w={'100%'} h={'100vh'}><Text w={'full'} textAlign={'center'} h={'100vh'} style={{ color: 'red', backgroundColor: 'black', padding: '20px' }}><Navbar/> {error}</Text></Box>;
  } 

  return (
    <Box
            width={'full'}
            minHeight={'100vh'}
            backgroundColor={'black'}
            py={'50px'}
            px={'10px'}
        >
            <Navbar />

            <Text color={'white'} p={'10px'} textAlign={'center'} fontSize={'20px'}>{imageData.title}</Text>
            <Box
            w={'full'}
            display={'flex'}
            px={'50px'}
            py={'100px'}
            flexDirection={['column', 'column', 'row', 'row']}
            justifyContent={'space-between'}
            gap={'10px'}
            >
              <Box w={['100%', '100%', '45%', '45%']} h={'auto'}>
                <Image src={imageData.url} alt={imageData.title} borderRadius={'20px'} />
              </Box>

              <Box
              w={['100%', '100%', '45%', '45%']}
              display={'flex'}
              alignItems={'center'}
              color={'white'}
              >
                <Text
                fontSize={'12px'}
                fontWeight={400}
                lineHeight={'24px'}
                >
                  {imageData.explanation}
                </Text>
              </Box>
            </Box>

        </Box>
  );
};

export default ImageDetail;
