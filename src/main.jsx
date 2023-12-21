import React from "react";
import ReactDOM from "react-dom/client";
import { ShoppingCart } from "./ShoppingCart.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ProductosProvider } from "./context/ProductosProvider.jsx";
import { CarritoProvider } from "./context/CarritoProvider.jsx";
import { LoginProvider } from "./context/LoginProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductosProvider>
    <CarritoProvider>
      <LoginProvider>
        <BrowserRouter>
          <React.StrictMode>
            <ChakraProvider>
              <ShoppingCart />
            </ChakraProvider>
          </React.StrictMode>
          ,
        </BrowserRouter>
      </LoginProvider>
    </CarritoProvider>
  </ProductosProvider>
);
