import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";

import { Image } from "@chakra-ui/react";
import portada from "/img/portada.jpg";
import { Link, navigate } from "../Link";

export const Header = () => {
  const { login,actualizarLogin,valido } = useContext(LoginContext);

const cerrarSeccion=()=>{
  actualizarLogin(false)
  navigate('/')
 
}

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      bgColor="#e3e3e3"
      // maxH="100vw"
      // minH="20vh"
      // bg="radial-gradient(ellipse at center, rgba(10,38,52,1) 15%, rgba(32,60,114,1) 28%, rgba(89,197,47,1) 77%, rgba(115,115,115,1) 100%)"
    >
      <Image
        src={portada}
        alt="Imagen de portada compushop"
        maxW={"50vw"}
        borderRadius={"15px"}
      />

      <Text
        fontSize={"2em"}
        textShadow={"2px 2px red"}
        fontFamily="cursive"
        color={"white"}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Siempre trabajando para darte la mejor calidad
      </Text>
      <Flex mb='15px'>
      
          {valido ?
          <Text color="gray" fontSize={"1.5em"} >
           {login.user} 
            <Button
            colorScheme="teal" 
            variant={'solid'}
            textShadow={'2px 2px black'}
            onClick={cerrarSeccion}
            m='5px'
            >
            LOGOUT'
          
            </Button>
          </Text>
          : 
          <Button colorScheme="red" variant={"outline"}>
            <Link
              to={"/login"}
              data={
                <Text color="red" fontSize={"1.5em"}>
                  Login
                </Text>
              }
            />
          </Button> 
        }
      </Flex>
      
    </Box>
  );
};
