import { Box, Center, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      bg="radial-gradient(ellipse at center, rgba(0,38,252,1) 0%, rgba(32,60,214,1) 28%, rgba(89,97,147,1) 77%, rgba(115,115,115,1) 100%)"
      // maxH="100vw"
      p='15px'
      display="flex"
      justifyContent={'center'}
      color="white"
    >
    
     
        <Text
        fontSize={'1.5em'}
        textShadow={"2px 2px red"}
       
        >
        Copyright © 2023 Trabajo Práctico del curso de Alkemy de React. 
        </Text>
       
     
    
    </Box>
  );
};
