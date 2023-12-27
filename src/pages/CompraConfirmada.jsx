import { Box, Button, Image, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import compra from '/img/compraExitosa.jpg'
import { useContext, useEffect, useState } from "react"
import { CarritoContext } from "../context/CarritoContext"
import { Link, navigate } from "../Link"

export const CompraConfirmada = () => {
  
    const {listaCompras,vaciarCarrito,cliente}=useContext(CarritoContext)
    const limpiarCart=()=>{
      vaciarCarrito()
      navigate('/')
    }
  
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
        <Table variant='striped' colorScheme='teal'>
        <TableCaption>Listado de la Compra</TableCaption>
            <Thead>
            <Tr>
                <Th>Producto</Th>
                <Th>Cantidad</Th>
            </Tr>
            </Thead>
            <Tbody>

            {listaCompras.map(pro=><Tr><Td>{pro.title}</Td> <Td>{pro.unidades}</Td></Tr>)}
            </Tbody>
        </Table>
        <Text
         textAlign={'center'}
         fontSize={'1.6em'}
         >Monto total de la Compra </Text>
        <Text 
        textAlign={'center'}
        fontSize={'1.5em'}
        color={'white'}
        textShadow={'1px 1px 1px black'}
        bgColor={'#848281'}
        
        > {listaCompras.reduce((total, listaCompras) => {
                  return parseFloat(
                    (
                      total +
                      listaCompras.unidades * listaCompras.price
                    ).toFixed(2)
                  );
                }, 0)}</Text>
        {/* <Text>{ console.log(JSON.stringify(listaCompras, null, 2))}</Text> */}
        {/* <Image src={compra}/> */}
        <Box m='5px' p='5px'>
            <Text textAlign={'center'}>DATOS DE FACTURACION</Text>
            <Text><b>CLIENTE:</b> {cliente.apellido} {cliente.nombre}</Text>
            <Text><b>TELEFONO:</b> {cliente.telefono}</Text>
            <Text><b>EMAIL:</b> {cliente.email}</Text>
            <Text><b>DIRECCION:</b> {cliente.direccion}</Text>
            <Text><b>FORMA DE PAGO:</b> {cliente.formaPago}</Text>
          </Box>
        <Text as='p'
     
         color="black" // Puedes ajustar el color según tu diseño
         fontSize="3em"
         textShadow={'5px 5px yellow'} // Puedes ajustar el tamaño de fuente según tu diseño
         fontWeight="bold" // Puedes ajustar el peso de la fuente según tu diseño
         textAlign="center"
        >Gracias por su compra Sr/Sra: {cliente.apellido} {cliente.nombre}.</Text>
        <Button 
        colorScheme="red" 
        onClick={()=>limpiarCart()}
        m='10px'
        >Limpiar Carrito</Button>
    </Box>
  )
}
