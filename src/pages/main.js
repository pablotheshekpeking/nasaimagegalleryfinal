'use client'
import React, { useState, useEffect } from 'react';
import { Box, Button, Center, FormControl, Input } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import axios from 'axios';
import Gallery from "../components/gallery";
import { ClipLoader } from 'react-spinners';
const API_KEY = process.env.REACT_APP_API_KEY;

export default function Main() {
    const [images, setImages] = useState([1]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showingResultsFor, setShowingResultsFor] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=12`
            );
            setImages(response.data);
        } catch (error) {
            console.error('Error fetching images: ', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.get(
                `https://images-api.nasa.gov/search?q=${searchQuery}`
            );

            if (response.data.collection.items.length === 0) {
                setError('No images found for the search query');
            } else {
                const imageData = response.data.collection.items.map((item) => ({
                    url: item.links[0].href,
                    title: item.data[0].title,
                    explanation: item.data[0].description
                }));

                setImages(imageData);
                setShowingResultsFor(searchQuery);
                setError('');
            }
        } catch (error) {
            console.error('Error searching images: ', error);
            setError('An error occurred while searching images');
        } finally {
            setLoading(false);
        }
    };

    const handleLoadMore = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=30`
            );
            setImages(prevImages => [...prevImages, ...response.data]);
        } catch (error) {
            console.error('Error fetching more images: ', error);
            setError('An error occurred while fetching more images');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            width={'full'}
            minHeight={'100vh'}
            backgroundColor={'black'}
            py={'50px'}
            px={'10px'}
        >
            <Navbar />
            <form
                onSubmit={handleSearch}
                style={{
                    paddingTop: '100px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <FormControl
                w={'100%'}
                display={'flex'}
                justifyContent={'center'}
                >
                    <Input
                        type="text"
                        placeholder="Search Gallery..."
                        color={'#D9D9D9'}
                        bg={'#1A1A1A'}
                        border={'1px solid #D9D9D9'}
                        borderRadius={'20px'}
                        width={['300px', '300px', '526px', '526px']}
                        height={'40px'}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </FormControl>
            </form>
            {loading ? (
                (<Center><ClipLoader color="#36d7b7" /></Center>)
            ) : (
                showingResultsFor && (
                    <div>
                        {!error && <h6 style={{ color: 'white' }}>Now showing results for: {showingResultsFor}</h6>}
                    </div>
                )
            )}

            {error && <p style={{ color: 'red', backgroundColor: 'black', padding: '20px', borderRadius: '20px' }}>Sorry your search query doesnt match any images in our gallery</p>}
            {!error && <Gallery images={images} />}
            {loading && <Center><ClipLoader color="#36d7b7" /></Center>}
            {!loading && (
                <Center><Button mt={'20px'} textAlign={'center'} w={'200px'} height={'auto'} fontSize={'12px'} className='showmore' onClick={handleLoadMore} disabled={loading}>
                    Show More...
                </Button></Center>
            )}

        </Box>
    );
}









