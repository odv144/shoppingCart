import { Box, Flex, Link } from "@chakra-ui/react";


export const NavBar = ({href,data}) => {
  return (
   <Box bgColor='grey' m='10px' p='5px 10px' borderRadius={'10px'}>
      <Link href={href}>{data}</Link>
    
   </Box>
  );
};
