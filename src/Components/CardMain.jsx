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
import { ProductosContext } from "../context/ProductosContext";
import { useContext } from "react";


export const CardMain = ({ onAddCanPro, onDelCanPro, canPro }) => {
  const {productos} = useContext(ProductosContext)
  return (
    <Card maxW="sm" m="10px" boxShadow='10px 10px 5px 0px rgba(0,0,0,0.75)' border='2px solid #ededed'>
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md"><Link to={'/:producto'}>Living room Sofa</Link></Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Text color="blue.600" fontSize="2xl">
            $450
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
           <NavLink to={'/:producto'}>Agregar Ahora</NavLink>
          </Button>
          <Button variant="ghost" colorScheme="blue" onClick={onAddCanPro}>
            Agregar
          </Button>
          {canPro > 0 && (
            <Button variant="ghost" colorScheme="blue" onClick={onDelCanPro}>
              Quitar
            </Button>
          )}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
