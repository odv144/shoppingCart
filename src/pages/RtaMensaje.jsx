import { Box, Text } from "@chakra-ui/react"

export const RtaMensaje = () => {
  return (
   <Box justifyContent={'center'} display={'flex'}>
        <Text
        as='i' 
        minH='150px' 
        m='25px'
        p='25px'
        borderRadius={'25px'}
        boxShadow={'5px 5px 2px #165403'}
        // boxShadow={'5px 5px 2px #165403'}
        bgColor={'#80f79a'} 
        maxW='350px' 
        fontSize={'3em'} 
        color='white'
        textShadow={'2px 2px black'}
        display={'block'} 
        textAlign={'center'}>Su mensaje a sido enviado con exito</Text>
   </Box>
  )
}
