import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Image } from '@chakra-ui/react'
import portada from '/img/portada.jpg'
export const Header = () => {
  // const {state}=useLocation()
  const navigate = useNavigate()
  const { login } = useContext(LoginContext);
  const cerrarSeccion=()=>{
    navigate('/')
    login.validado=false
  }

  return (
    <Box
     display={'flex'}
     justifyContent={'center'}
     alignItems={'center'}
     flexDir={'column'}
      bgColor="#e3e3e3"
      // maxH="100vw"
      // minH="20vh"
      // bg="radial-gradient(ellipse at center, rgba(10,38,52,1) 15%, rgba(32,60,114,1) 28%, rgba(89,197,47,1) 77%, rgba(115,115,115,1) 100%)"
    >
      <Image src={portada} alt='Imagen de portada compushop'
       maxW={'50vw'} 
       borderRadius={'15px'}
     
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
      {login.validado && 
          <Text color="gray" fontSize={"1.5em"} >
            Usuario: {login.user} <Button onClick={cerrarSeccion}
            colorScheme="teal" 
            variant={'solid'}
            textShadow={'2px 2px black'}
            >LOGOUT</Button>
          </Text>
          }
      </Flex>
      {/* <Flex justifyContent={'right'}>
        {login.validado ? (
          <Text color="white" fontSize={"1.5em"}>
            Usuario: {login.user} <Button onClick={cerrarSeccion}>Logout</Button>
          </Text>
        ) : (
          <Button colorScheme="teal" variant={'outline'}>
            <NavLink to={'/login'}>
              <Text 
              color="red.300" 
              fontSize={"1.5em"}
              
              >
                Login
              </Text>
            </NavLink>
          </Button>
        )}
      </Flex> */}
    </Box>
  );
};
