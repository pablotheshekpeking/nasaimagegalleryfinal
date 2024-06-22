'use client'
import { Box, Text, Image } from "@chakra-ui/react";
import Navbar from "../components/navbar";

export default function Explore() {
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
                pt={'70px'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
            >
                <Text
                    fontSize={['30px', '30px', '64px', '64px']}
                    fontWeight={300}
                    textAlign={'center'}
                    color={'#9E9E9E'}
                >
                    Space explorers <br /> since 1998
                </Text>

                <Text
                    fontSize={['14px', '14px', '24px', '24px']}
                    fontWeight={300}
                    textAlign={'center'}
                    color={'#9E9E9E'}
                >
                    Explore our gallery to see beyond.
                </Text>

                <Box
                w={'100%'}
                display={'flex'}
                justifyContent={'center'}
                pt={['50px', '50px', '0px', '0px']}
                >
                <Image
                    src="/helmet.png"
                    position={'absolute'}
                    width={'500px'}
                    height={'auto'}
                />
                </Box>
            </Box>
        </Box>
    );
}