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
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Button, Flex } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export const ContenidoCarrito = () => {
    const {
        canPro,
        listaCompras,
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra,
      } = useContext(CarritoContext);
  return (
    <>
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
                <Td isNumeric>{item.price}</Td>
                <Td isNumeric>
                  <button onClick={() => disminuirCantidad(item.id)}>
                    <MinusIcon boxSize={4} mr="5px" />
                  </button>
                  {item.unidades}
                  <button onClick={() => aumentarCantidad(item.id)}>
                    <AddIcon boxSize={4} ml="5px" />
                  </button>
                </Td>
                <Td isNumeric>{item.unidades * item.price}</Td>
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
              <Th isNumeric>
                {listaCompras.reduce((total, listaCompras) => {
                  return total + listaCompras.unidades * listaCompras.price;
                }, 0)}
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Flex justifyContent="center">
        <Button
          colorScheme="teal"
          variant="outline"
          m="10px"
          onClick={() => alert("Enviando compra")}
        >
          Confirmar Compra
        </Button>
      </Flex>
    </>
  );
};
