import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from 'react-icons/fa'

function Social() {
    return (
        <HStack spacing="24">
            <Icon as={FaFacebookF} boxSize="50" onClick={()=>{
                window.open("https://www.facebook.com/ayush.khaskalam/")
            }}/>
            <Icon as={FaGoogle} boxSize="50" onClick={()=>{
                window.open("https://portfolio-contact-form-33a35.web.app/")
            }}/>
            <Icon as={FaSpotify} boxSize="50" onClick={()=>{
                window.open("https://open.spotify.com/user/31pofceyg2x2jqzaux6uemw7tzri?si=20e1486b45cb46f6")
            }}/>
           
        </HStack>
    )
}

export default Social
