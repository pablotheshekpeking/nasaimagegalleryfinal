// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Explore from './pages/explore';
import Six from './pages/six';
import Main from './pages/main';
import ImageDetail from './pages/imagedetails'; // Ensure this path is correct

function MyApp({ Component, pageProps }) {
  const [currentPage, setCurrentPage] = useState('explore');

  useEffect(() => {
    const exploreTimer = setTimeout(() => {
      setCurrentPage('six');
    }, 3000); // Show Explore for 3 seconds

    const sixTimer = setTimeout(() => {
      setCurrentPage('main');
    }, 5000); // Show Six for 5 seconds after Explore

    return () => {
      clearTimeout(exploreTimer);
      clearTimeout(sixTimer);
    };
  }, []);

  let content;
  if (currentPage === 'explore') {
    content = <Explore />;
  } else if (currentPage === 'six') {
    content = <Six />;
  } else {
    content = <Main />;
  }

  return (
    <ChakraProvider>
        <Routes>
          <Route path="/" element={content} />
          <Route path="/details/:date" element={<ImageDetail />} />
        </Routes>
    </ChakraProvider>
  );
}

export default MyApp;
