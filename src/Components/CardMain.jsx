import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { NavBarLink } from "./NavBarLink";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Link } from "../Link.jsx";
import {BadgeCarrito} from './BadgeCarrito.jsx'
export const CardMain = ({
  canPro,
  producto,
  hadleAgregar,
  hadleDisminuir,
}) => {
  return (
    <Card
      maxW="sm"
      m="10px"
      boxShadow="10px 10px 5px 0px rgba(0,0,0,0.75)"
      border="2px solid #ededed"
    >
      <CardBody>
        <Box h={"380px"}>
          <Link
            to={`/detalle/${producto.id}`}
            data={
              <Image
                src={producto.image}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                maxH={"375px"}
              />
            }
          />
        </Box>
        <Stack mt="6" spacing="3" h={"200px"}>
          <Heading size="md">
            <Link to={`/detalle/${producto.id}`} data={producto.title} />
          </Heading>
          <Text overflow={"hidden"} maxH="100px">
            {producto.description}
          </Text>
        </Stack>
        <Box alignItems={"flex-end"}>
          <Text color="blue" fontSize="2xl" textAlign={"right"} mr={"15px"}>
            ${producto.price}
          </Text>
        </Box>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            <Link to={`/detalle/${producto.id}`} data={"Detalle"} />
          </Button>
          <Button
            variant="ghost"
            colorScheme="blue"
            onClick={() => hadleAgregar(producto.id)}
          >
            Agregar
          </Button>
          {canPro > 0 && (
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => hadleDisminuir(producto.id)}
            >
              Quitar
            </Button>
          )}
          <Box display={"flex"} justifyContent={"right"}>
            <Link to={"/carrito"} data={<BadgeCarrito value={canPro} />} />
          </Box>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
