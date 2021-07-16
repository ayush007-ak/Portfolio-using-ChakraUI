// import { Button, Stack, useColorMode, useMediaQuery } from '@chakra-ui/react'
// import React from 'react'
// import {Circle , Flex , Box , Image , Text} from '@chakra-ui/react';

// function Header() {
//     const {colorMode} = useColorMode();
//     const isDark = colorMode==="dark";

//     const {isNotSmallerScreen} = useMediaQuery("(min:width:600px)");
//     return (
//         <Stack>
//             <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"></Circle>
//             <Flex 
//             direction={isNotSmallerScreen?"row":"column"} spacing="200px" p={isNotSmallerScreen?"32":"0"} alignSelf="flex-start">

//                 <Box mt={isNotSmallerScreen?"0":16} align='flex-start'>
//                     <Text fontSize="5x1" fontWeight="semibold">Hi, I am </Text>
//                     <Text fontSize="7x1" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>Ayush khaskalam </Text>
//                     <Text color={isDark?"gray.200":"gray.500"}> Testing</Text>
//                      <Button mt={8} colorScheme="blue" onClick={() =>{
//                          window.open("ayushkhaskalam1898@gmail.com")
//                      }}>Hire Me</Button>
//                 </Box>
//                 <Image alignSelf="center" mt={isNotSmallerScreen?"0":"12"} mb={isNotSmallerScreen?"0":"!2"} borderRadius='full' backgroundColor="transparent" boxShadow="lg"
//                 boxSize="300px" src='https://avatars.githubusercontent.com/u/66531899?s=400&u=6bc1ec1f418f5c98fc0642fbb96fc5b96184317c&v=4'></Image>
//             </Flex>
//         </Stack>
//     )
// }

// export default Header

import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Ayush khaskalam</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>SDE - React Js, Node Js and Mongo Db. Keen interest in development field and created few project using various technologies and work as full time software developer  🗣</Text>
                    <Button mt={8} colorScheme="blue" onClick={()=>{
                       window.open('mailto:ayushkhaskalam1898@gmail.com')
                    }}
                    >Hire Me</Button>

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src="https://avatars.githubusercontent.com/u/66531899?s=400&u=6bc1ec1f418f5c98fc0642fbb96fc5b96184317c&v=4" />
            </Flex>

        </Stack>
    )
}

export default Header
