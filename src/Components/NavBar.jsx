import { Box, Container, Flex, Link } from "@chakra-ui/react";
import { NavBarLink } from "./NavBarLink";
import { BadgeCarrito } from "./BadgeCarrito";


export const NavBar = ({canPro}) => {
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
        <NavBarLink href={"www.google.com"} data={"Inicio"} />
        <NavBarLink href={"www.google.com"} data={"Productos"} />
        <NavBarLink href={"www.google.com"} data={"Servicios"} />
        <NavBarLink href={"www.google.com"} data={"Contact"} />
      </Container>
      <Container display={'flex'} justifyContent={'flex-end'}>
        <BadgeCarrito value={canPro} />
      </Container>
    </Box>
  );
};
