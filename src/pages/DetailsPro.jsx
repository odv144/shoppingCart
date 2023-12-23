import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ProductosContext } from "../context/ProductosContext";
import { NavLink, useParams } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";



export const DetailsPro = () => {
  const productos = useContext(ProductosContext);
  const { productoExistente, listaCompras } = useContext(CarritoContext);
  const { id } = useParams();


  // const [pro, setPro] = useState(initPro);
  let pro = {
    image: "",
    title: "prueba mia",
    description: "mas texto",
    price: "",
    category: "",
    id: "",
    unidades:0
  };

  // //metodo para filtrar el elemento elegido y mostrarlo como devulve un array de objeto
  // //de uno solo lo vulvo a asignar para poder usar las propiedades del objeto
  if (productos.length > 0 && id != undefined) {
    pro = productos.filter((e) => e.id == id)[0];
    
  }
  // // setPro(productos != undefined ? :initPro);


  const agregarProDet = (pro) => {
    productoExistente(pro);
    pro = listaCompras.filter(e=>e.id==pro.id)
    
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      justifyContent={'center'}
      // maxW={'80vw'}
      m='20px'
      border={'none'}
      
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={pro.image}
        alt="Caffe Latte"
        m='10px'
      />

      <Stack>
        <CardBody>
          <Heading 
          size="md" 
          color="blue" 
          fontSize={'1.5em'}
          textShadow={"2px 1px 0.5px #00f6ff"}>
            {pro.title}
          </Heading>

          <Text py="2" as='p' fontSize={'1.2em'}>{pro.description}</Text>
          <Text as='p' >Categoria: {pro.category}</Text>
          <Box 
          color="blue" 
          fontWeight={"bold"}
          fontSize={'1.2em'}
          mb='5px'
          p='15px'
          borderBottom='2px solid #004414'
         
          >
            Precio: ${pro.price}
          </Box>
        </CardBody>

        <CardFooter justifyContent={'flex-start'} >
          <Button
            m='10px'
            variant="solid"
            colorScheme="blue"
            onClick={() => agregarProDet(pro)}
          >
            {pro.unidades != undefined || pro.unidades > 0 ? (
              <Text>Sumar Unidades</Text>
            ) : (
              <Text>Agregar al carrito</Text>
            )}
          </Button>
          <Button
          m='10px'
            variant="solid"
            colorScheme="green"
            
          >
           <NavLink to={'/carrito'}>
              <Text>Ver Carrito</Text>
           </NavLink>
             
            
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
