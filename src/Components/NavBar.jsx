import { Box, Button, Container } from "@chakra-ui/react";

import { BadgeCarrito } from "./BadgeCarrito";
import { Outlet } from "react-router-dom";

import { NavBarLink } from "./NavBarLink";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import {Link} from '../Link.jsx'
export const NavBar = () => {
 const { canPro } = useContext(CarritoContext);
 
  
  return (
    <Box display="flex" flexDirection={"row"}>
      <Container
        display="flex"
        flexDirection={"row"}
        fontWeight={"900"}
        color="red.800"
        fontFamily={"sans-serif"}
        textShadow={"1px 1px #ffae00"}
        p="10px"
      >
        
        <NavBarLink href={"/"} data={"Home"} />
        <NavBarLink href={"/carrito"} data={"Carrito"} />
        {/* <NavBarLink href={"/producto"} data={"Productos"} /> */}
        {/* <NavBarLink href={"www.google.com"} data={"Servicios"} /> */}
        <NavBarLink href={"/contacto"} data={"Contact"} />
      </Container>
      <Container display={"flex"} justifyContent={"flex-end"}>
        <Link to={"/carrito"} data={
          <BadgeCarrito value={canPro} />}/>
      </Container>
    </Box>
  );
};
