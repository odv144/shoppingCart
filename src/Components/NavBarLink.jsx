import { Box } from "@chakra-ui/react";
import { Link } from "../Link";
export const NavBarLink = ({ href, data }) => {
  
  return (
    <Box bgColor="yellow.300" m="5px" p="5px" w='150px'borderRadius="10px" 
          textAlign={'center'} verticalAlign={"middle"}
      >
        {/* <NavLink to={href}>{data}</NavLink> */}
        <Link to={href} h='30px' data={data} /> 
    </Box>
  );
};

