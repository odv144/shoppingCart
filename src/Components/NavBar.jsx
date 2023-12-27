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
    <Box display="flex" flexDirection={["row"]} justifyContent={'space-evenly'} >
      <Box
        display="flex"
        flexDirection={['column',"row"]}
        fontWeight={"900"}
        color="#960606"
        fontFamily={"sans-serif"}
        textShadow={"1px 1px #ffae00"}
        p="10px"
        
      >
        
        <NavBarLink href={"/"} data={"Home"} />
        <NavBarLink href={"/carrito"} data={"Carrito"} />
        <NavBarLink href={"/contacto"} data={"Contact"} />
      </Box>
      <Box display={"flex"} justifyContent={"right"}>
        <Link to={"/carrito"} data={
          <BadgeCarrito value={canPro} />}/>
      </Box>
    </Box>
  );
};
