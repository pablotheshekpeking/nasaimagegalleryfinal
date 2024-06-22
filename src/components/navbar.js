'use client'
import React from "react";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
export default function Navbar() {
    return(
        <Box
        w={'full'}
        height={'50px'}
        display={'flex'}
        justifyContent={'space-between'}
        px={[10, 10, 70, 70]}
    >
        <Link to={'/'}>
        <Box><Image
        src="/logo.png"
        position={'absolute'}
        width={'38px'}
        height={'32px'}
        /></Box></Link>

        <Box><HamburgerIcon boxSize={6} color={'white'} /></Box>

    </Box>
    );
    
}