import { Box } from "@chakra-ui/react";
import { Header } from "../Components/Header";
import { NavBar } from "../Components/NavBar";
import { CardMain } from "../Components/CardMain";
import { Footer } from "../Components/Footer";
import { useContext } from "react";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";

export const Home = () => {
  const productos = useContext(ProductosContext);

  const {
    canPro,
    productoExistente,
    listaCompras,
    // agregarCompra,
    // aumentarCantidad,
    disminuirCantidad,
    eliminarCompra,
  } = useContext(CarritoContext);

  const hadleAgregar = (compra) => {
    productoExistente(compra);
  };
  const hadleQuitar = (id) => {
    eliminarCompra(id);
  };
  // const hadleAumentar=(id)=>{
  //    aumentarCantidad(id)

  //  }
   const hadleDisminuir=(id)=>{
    disminuirCantidad(id)
   }

  return (
    <Box minH="80vh" pt={"20px"}>
      {/* <Header />
      <NavBar canPro={canPro} /> */}
      <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"}>
        {productos.slice(0, 15).map((pro) => (
          <CardMain
            // onDelCanPro={onDelCanPro}
            canPro={(pro.unidades!=null)?pro.unidades:0}
            key={pro.id}
            producto={pro}
            hadleAgregar={() => hadleAgregar(pro)}
            hadleDisminuir={()=>hadleDisminuir(pro.id)}
           
            // hadleAumentar={()=>hadleAumentar(pro.id)}
          />
        ))}
      </Box>
    </Box>
  );
};
