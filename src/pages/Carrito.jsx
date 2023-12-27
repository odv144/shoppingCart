import { useContext } from "react";
import { Box } from "@chakra-ui/react";
import { LoginContext } from "../context/LoginContext";
import { Login } from "./Login";
import { ContenidoCarrito } from "../Components/ContenidoCarrito";



export const Carrito = () => {
  const { login,valido } = useContext(LoginContext);
  return (
    <Box>
      {valido ? <ContenidoCarrito /> : <Login />}
    
    
    </Box>
  );
};
