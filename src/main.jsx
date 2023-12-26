import React from "react";
import ReactDOM from "react-dom/client";
import { ShoppingCart } from "./ShoppingCart.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { ProductosProvider } from "./context/ProductosProvider.jsx";
import { CarritoProvider } from "./context/CarritoProvider.jsx";
import { LoginProvider } from "./context/LoginProvider.jsx";
import {
  BrowserRouter,
  Router,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductosProvider>
      <CarritoProvider>
        <LoginProvider>
          <React.StrictMode>
            <ChakraProvider>
              <ShoppingCart bgcolor="white" />
            </ChakraProvider>
          </React.StrictMode>
        </LoginProvider>
      </CarritoProvider>
    </ProductosProvider>
  </BrowserRouter>
);
