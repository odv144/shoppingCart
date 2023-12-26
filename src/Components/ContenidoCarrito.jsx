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
import { Box, Button, Flex } from "@chakra-ui/react";
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
    <>
    <Box>
      <Button onClick={()=>vaciarCarrito()}>Limpiar Carrito</Button>
    </Box>
      <TableContainer>
        <Table variant="simple">
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
      <Flex justifyContent="center">
       {listaCompras.length>0 &&
        <Button colorScheme="teal" variant="outline" m="10px">
          <Link to={"/confirmado"} data={'Confirmar Compra'}/>
        </Button>
        }
      </Flex>
    </>
  );
};
