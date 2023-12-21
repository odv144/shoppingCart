import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const { login } = useContext(LoginContext);
  const cerrarSeccion=()=>{
    login.validado=false
  }
  return (
    <Box
      bgColor="#0000ff"
      maxH="100vw"
      minH="20vh"
      bg="radial-gradient(ellipse at center, rgba(0,38,252,1) 0%, rgba(32,60,214,1) 28%, rgba(89,97,147,1) 77%, rgba(115,115,115,1) 100%)"
    >
      <Text
        fontSize={"5em"}
        textShadow={"5px 5px red"}
        fontFamily="cursive"
        color={"white"}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        COMPUSHOP
      </Text>
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
      <Flex>
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
      </Flex>
    </Box>
  );
};
