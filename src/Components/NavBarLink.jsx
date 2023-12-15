import { Box, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const NavBarLink = ({ href, data }) => {
  
  return (
    <Box bgColor="yellow.300" m="5px" p="5px" w='150px'borderRadius="10px" 
          textAlign={'center'} verticalAlign={"middle"}
      >
      <NavLink to={href} h='30px'  >{data}</NavLink>
    </Box>
  );
};

