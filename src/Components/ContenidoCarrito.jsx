import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import {
  Box,
  Button,
  Container,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { Link } from "../Link";

export const ContenidoCarrito = () => {
  const {
    canPro,
    listaCompras,
    aumentarCantidad,
    disminuirCantidad,
    eliminarCompra,
    vaciarCarrito,
  } = useContext(CarritoContext);
  // const [guardar,setGuardar]=useState(
  //   window.localStorage.getItem('producto')
  // )
  // const setLocalStorage = value=>{
  //   try{

  //     window.localStorage.setItem('producto',JSON.stringify(listaCompras, null, 2))
  //   }catch(error){
  //     console.error(error);
  //   }
  // }
  // setLocalStorage('prueba')
  // // console.log(guardar);
  // if(window.localStorage.getItem('producto')!=undefined){
  //   const recupero = JSON.parse(window.localStorage.getItem('producto'));
  //   console.log(recupero);
  // }
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
     
     
    >
      <Box>
        <Button 
        colorScheme="red"
        variant={'outline'}
        onClick={() => vaciarCarrito()}>Limpiar Carrito</Button>
      </Box>
      <Container  
      bgColor={'#e5e5e5'}
      mt='5px'
      borderRadius={'10px'}
      maxW='auto'
      >
      <TableContainer maxW={'90vw'}>
        <Table variant="simple" display={{ base: "none",md:'table' }}>
          <TableCaption>Listado de productos comprados</TableCaption>
          <Thead>
            <Tr>
              <Th>Nombre</Th>
              <Th isNumeric>P/U</Th>
              <Th isNumeric>Cantidad</Th>
              <Th isNumeric>Subtotal</Th>
              <Th>Eliminar</Th>
            </Tr>
          </Thead>
          <Tbody>
            {listaCompras.map((item) => (
              <Tr key={item.id}>
                <Td>{item.title}</Td>
                <Td isNumeric>{item.price.toFixed(2)}</Td>
                <Td isNumeric>
                  <button onClick={() => disminuirCantidad(item.id)}>
                    <MinusIcon boxSize={4} mr="5px" />
                  </button>
                  {item.unidades}
                  <button onClick={() => aumentarCantidad(item.id)}>
                    <AddIcon boxSize={4} ml="5px" />
                  </button>
                </Td>
                <Td isNumeric>{(item.unidades * item.price).toFixed(2)}</Td>
                <Td>
                  <button onClick={() => eliminarCompra(item.id)}>
                    Eliminar
                  </button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Total de la compra</Th>
              <Th></Th>
              <Th></Th>
              <Th isNumeric fontSize={"1.5em"}>
                {listaCompras.reduce((total, listaCompras) => {
                  return parseFloat(
                    (
                      total +
                      listaCompras.unidades * listaCompras.price
                    ).toFixed(2)
                  );
                }, 0)}
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

      <Box display={{ base: "block", md: "none" }}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"} color={"red"}>
            Listado de productos comprados
          </Text>
          <Box>
            {listaCompras.map((item) => (
              <UnorderedList key={item.id} listStyleType={"none"}>
                <ListItem>
                  <Text as="b">Producto:</Text>
                  <Text fontSize={'1.2em'} 
                  color='blue' 
                  fontWeight={'bold'}> {item.title}</Text>
                </ListItem>
                <ListItem>
                  <Text as='b'>Precio:</Text>
                  <Text fontSize={'1.2em'} 
                  color='blue' 
                  fontWeight={'bold'}>{item.price.toFixed(2)}</Text> 
                </ListItem>
                <Box 
                display={"flex"} 
                flexDirection={"row"} 
                alignItems={'center'}
                >
                  <Text as="b" display={'block'}>Unidades:</Text>

                  <Button 
                   colorScheme="teal"
                    variant="outline" 
                    m="10px"
                  onClick={() => disminuirCantidad(item.id)}>
                    <MinusIcon boxSize={4} mr="5px" />
                  </Button>
                  <ListItem><Text fontSize={'1.2em'} 
                  color='blue' 
                  fontWeight={'bold'}>{item.unidades}</Text></ListItem>
                  <Button 
                   colorScheme="teal" variant="outline" m="10px"
                  onClick={() => aumentarCantidad(item.id)}>
                    <AddIcon boxSize={4} ml="5px" />
                  </Button>
                </Box>
                <ListItem >
                  <Text as="b">Precio Unitario:</Text>
                  <Text 
                  fontSize={'1.2em'} 
                  color='blue' 
                  fontWeight={'bold'}
                  > {(item.unidades * item.price).toFixed(2)}</Text>
                 
                </ListItem>

                <Button
                  colorScheme="teal"
                  variant="outline"
                  m="10px"
                  
                  onClick={() => eliminarCompra(item.id)}
                >
                  Eliminar Producto
                </Button>
              </UnorderedList>
            ))}
          </Box>

          <Box>
            <Text as="b" 
            fontSize={"1.5em"}
            color='blue'
            fontWeight={'bold'}>Total de la Compra:</Text>

            <Text 
            fontSize={"1.5em"}
            color='blue'
            fontWeight={'bold'}>$ 
              {listaCompras.reduce((total, listaCompras) => {
                return parseFloat(
                  (total + listaCompras.unidades * listaCompras.price).toFixed(
                    2
                  )
                );
              }, 0)}
            </Text>
          </Box>
        </Box>
      </Box>
      <Flex justifyContent="right">
        {listaCompras.length > 0 && (
          <Button colorScheme="teal" variant="outline" m="10px">
            {/* <Link to={"/confirmado"} data={"Confirmar Compra"} /> */}
            <Link to={"/datocliente"} data={"Confirmar Compra"} />
          </Button>
        )}
      </Flex>
    </Container>
    </Box>
  );
};
