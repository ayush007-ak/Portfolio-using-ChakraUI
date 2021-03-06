import React from 'react'
import {VStack , Flex , Heading, useColorMode, Spacer} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/button';
import {FaSun,FaMoon,FaInstagram,FaGithub,FaLinkedin } from 'react-icons/fa';
import Header from './components/Header';
import Social from './components/Social';
import Profile from './components/Profile';

function App() {

  const {colorMode , toggleColorMode} = useColorMode();
  const isDark = colorMode==="dark"
  return (
   <VStack p={5}>
     <Flex w="100%">
       <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">IamAk</Heading>
   
      <Spacer></Spacer>
     <IconButton icon={<FaLinkedin/>} onClick={()=>{
       window.open("https://www.linkedin.com/in/ayush-khaskalam-2198391a9")
     }}></IconButton>
     <IconButton ml={2} icon={<FaGithub/>} onClick={()=>{
       window.open("https://github.com/ayush007-ak")
     }}></IconButton>
     <IconButton ml={2} icon={<FaInstagram/>} onClick={()=>{
       window.open("https://www.instagram.com/ayush_khaskalam98/")
     }}></IconButton>
     <IconButton ml={8} icon={isDark ? <FaSun/>: <FaMoon/>} isRound="true" onClick={toggleColorMode}></IconButton>
     </Flex>
     <Header/>
     <Social/>
     <Profile/>
   </VStack>
  )
}

export default App;
