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
import { Link, NavLink } from "react-router-dom";
import { NavBarLink } from "./NavBarLink";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

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
          <Link to={`/${producto.id}`}>
            <Image
              src={producto.image}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              maxH={"375px"}
            />
          </Link>
        </Box>
        <Stack mt="6" spacing="3" h={"200px"}>
          <Heading size="md">
            <Link to={`/${producto.id}`}>{producto.title}</Link>
          </Heading>
          <Text overflowWrap={"break-word"}>{producto.description}</Text>
        </Stack>
        <Box alignItems={"flex-end"}>
          <Text color="blue.600" fontSize="2xl" textAlign={"right"} mr={"15px"}>
            ${producto.price}
          </Text>
        </Box>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            <NavLink to={`/${producto.id}`}>Detalle</NavLink>
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
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
