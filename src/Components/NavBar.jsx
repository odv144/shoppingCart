import { Box, Container, Flex, Link } from "@chakra-ui/react";
import { NavBarLink } from "./NavBarLink";
import { BadgeCarrito } from "./BadgeCarrito";

import { CarritoContext } from "../context/CarritoContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";


export const NavBar = () => {
  const {canPro} = useContext(CarritoContext)
  return (
    <Box  display="flex"
    flexDirection={"row"}
   
    >
      <Container 
      display="flex"
      flexDirection={"row"}
      fontWeight={'900'}
      color='red.800'
      fontFamily={'sans-serif'}
      textShadow={'1px 1px #ffae00'}
      >
        <NavBarLink href={'/'} data={"Home"} />
        <NavBarLink href={'/carrito'} data={"Carrito"} />
        <NavBarLink href={"/producto"} data={"Productos"} />
        <NavBarLink href={"www.google.com"} data={"Servicios"} />
        <NavBarLink href={"www.google.com"} data={"Contact"} />
      </Container>
      <Container display={'flex'} justifyContent={'flex-end'}>
        <NavLink to={'/carrito'}><BadgeCarrito value={canPro} /></NavLink>
      </Container>
    </Box>
  );
};
