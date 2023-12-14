import { Box, Text } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Box bgColor="#0000ff" maxH="100vw" minH="20vh" bg='radial-gradient(ellipse at center, rgba(0,38,252,1) 0%, rgba(32,60,214,1) 28%, rgba(89,97,147,1) 77%, rgba(115,115,115,1) 100%)' > 
        <Text 
        fontSize={'5em'}
        textShadow={'5px 5px red'}
        fontFamily='cursive'
        color={'white'} 
        fontWeight={'bold'}
        textAlign={'center'}
        >COMPUSHOP</Text>
        <Text 
        fontSize={'2em'}
        textShadow={'2px 2px red'}
        fontFamily='cursive'
        color={'white'} 
        fontWeight={'bold'}
        textAlign={'center'}
        >Siempre trabajando para darte la mejor calidad</Text>
      </Box>
  )
}
