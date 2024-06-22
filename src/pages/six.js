'use client'
import { Box, Text, Image } from "@chakra-ui/react";
import Navbar from "../components/navbar";

export default function Six() {
    return (
        <Box
            width={'full'}
            minHeight={'100vh'}
            backgroundImage={'/bg.png'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            py={'50px'}
        >
            <Navbar />

            <Box
                pt={['150px','150px', '200px', '200px']}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                px={'10px'}
            >

                <Text
                    fontSize={['15px', '15px', '24px', '24px']}
                    fontWeight={300}
                    textAlign={'center'}
                    color={'#9E9E9E'}
                >
                    For six decades, Nasa has led the peaceful exploration of space, making discoveries about our planet
                </Text>

                <Box
                w={'100%'}
                display={'flex'}
                justifyContent={'center'}
                pt={50}
                >
                <Image
                    src="/helmet.png"
                    position={'absolute'}
                    width={'500px'}
                    height={'auto'}
                />
                </Box>
            </Box>
            <Box
            w={'full'}
            display={'flex'}
            justifyContent={'center'}
            ><Image src="/moon.png" width={'1038px'} height={'auto'} style={{position: 'absolute', top: '0px'}} /></Box>
        </Box>
    );
}