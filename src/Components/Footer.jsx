import { Box, Center, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      bg="radial-gradient(ellipse at center, rgba(0,38,252,1) 0%, rgba(32,60,214,1) 28%, rgba(89,97,147,1) 77%, rgba(115,115,115,1) 100%)"
      maxH="100vw"
      minH="10vh"
      display="flex"
      color="white"
    >
      <Center flexDir="column">
        <Text>
          Footer1 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Saepe, libero.
        </Text>
        <Text>Footer2</Text>
      </Center>
      <Center flexDir="column">
        <Text>
          Footer1 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Saepe, libero.
        </Text>
        <Text>Footer2</Text>
      </Center>
      <Center flexDir="column">
        <Text>
          Footer1 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Saepe, libero.
        </Text>
        <Text>Footer2</Text>
      </Center>
    </Box>
  );
};
