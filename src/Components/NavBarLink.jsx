import { Box, Link } from "@chakra-ui/react";

export const NavBarLink = ({ href, data }) => {
  return (
    <Box bgColor="yellow.300" m="5px" p="5px" w='150px'borderRadius="10px" 
          textAlign={'center'} verticalAlign={"middle"}
      >
      <Link href={href} h='30px'  >{data}</Link>
    </Box>
  );
};

