import { Box } from "@chakra-ui/react";
import { CardMain } from "../Components/CardMain";
import { useContext } from "react";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";

export const Home = () => {
  const productos = useContext(ProductosContext);

  const {
    productoExistente,
    listaCompras,
    canPro,
    disminuirCantidad,
    eliminarCompra,
  } = useContext(CarritoContext);

  const hadleAgregar = (compra) => {
    productoExistente(compra);
  };
  const hadleQuitar = (id) => {
    eliminarCompra(id);
  };

   const hadleDisminuir=(id)=>{
    disminuirCantidad(id)
   }

  return (
    <Box minH="80vh" pt={"20px"}>
    
      <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"}>
     
        {productos.map((pro) => (
          <CardMain
          
            canPro={(pro.unidades!=null)?pro.unidades:0}
            key={pro.id}
            producto={pro}
            hadleAgregar={() => hadleAgregar(pro)}
            hadleDisminuir={()=>hadleDisminuir(pro.id)}
           
        
          />
        ))}
      </Box>
    </Box>
  );
};
