import { Box, Center, Container, Text } from "@chakra-ui/react"
import { NavBar } from "./Components/NavBar"

export const ShoppingCart = () => {
    return (
        <Box bgColor='#eeffbb'
            maxH='100vw'
            minH='80vh'
        >
            <Box bgColor='#ffaabb'
                maxH='100vw'
                minH='20vh'
             
                >
                <Text>Logo con input para busqueda</Text>
                <Text>Slogan de la empresa  todo con una iamgen de fondo</Text>

            </Box>
            <Box bgColor='red.300'
                maxH='100vw'
                minH='10vh' display='flex' flexDirection={'row'}>
                <NavBar href={'www.google.com'} data={'Google'}/>
                <NavBar href={'www.google.com'} data={'Google'}/>
                <NavBar href={'www.google.com'} data={'Google'}/>
            </Box>
            <Box bgColor='#eeffbb'
                maxH='100vw'
                minH='60vh'>
                <Text>Main</Text>
            </Box>
            <Box bgColor='#efefbb'
                maxH='100vw'
                minH='10vh'
                display='flex'
            >
                <Center bgColor='#efbaab' flexDir='column' >
                    <Text >Footer1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, libero.</Text>
                    <Text >Footer2</Text>
                </Center>
                <Center bgColor='#efbaab' flexDir='column' >
                    <Text >Footer1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, libero.</Text>
                    <Text >Footer2</Text>
                </Center>
                <Center bgColor='#efbaab' flexDir='column' >
                    <Text >Footer1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, libero.</Text>
                    <Text >Footer2</Text>
                </Center>
            </Box>
        </Box>
    )
}
