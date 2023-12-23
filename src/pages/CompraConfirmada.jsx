import { Box, Image, Table, Td, Text, Tr } from "@chakra-ui/react"
import compra from '/img/compraExitosa.jpg'
import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
export const CompraConfirmada = () => {
    const {listaCompras}=useContext(CarritoContext)
  return (
    <Box position={'relative'} >
        <Box 
        bgImage={compra} 
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        bgPosition={'center'} 
        opacity={'0.3'} 
        h={'500px'} 
        position={'absolute'}
        top="0"
        left="0"
        width="100%"
        height="100%"
        >

        </Box>
        <Text as='i' fontSize={'2em'} display={'block'} textAlign={'center'}>Usted compro:</Text>
        <Table fontSize={'1.2em'}>
            <Tr>
                <Td>Producto</Td>
                <Td>Cantidad</Td>
            </Tr>
            {listaCompras.map(pro=><Tr><Td>{pro.title}</Td> <Td>{pro.unidades}</Td></Tr>)}
        </Table>
        
        <Text>{ console.log(JSON.stringify(listaCompras, null, 2))}</Text>
        {/* <Image src={compra}/> */}
        <Text as='p'
     
         color="black" // Puedes ajustar el color según tu diseño
         fontSize="3em"
         textShadow={'5px 5px yellow'} // Puedes ajustar el tamaño de fuente según tu diseño
         fontWeight="bold" // Puedes ajustar el peso de la fuente según tu diseño
         textAlign="center"
        >Gracias por su compra. La compra se realizo correctamente</Text>
    </Box>
  )
}
