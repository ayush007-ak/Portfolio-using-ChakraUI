import React from 'react'
import {VStack , Flex , Heading} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/button';
import {FaSun,FaMoon,FaInstagram,FaGithub,FaLinkedin } from 'react-icons/fa';
function App() {
  return (
   <VStack p={5}>
     <Flex w="100%">
       <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">Ayush khaskalam</Heading>
     </Flex>
     <IconButton icon={<FaSun/>} isRound="true"></IconButton>
   </VStack>
  )
}

export default App;
