import React from "react";
import ReactDOM from "react-dom/client";
import { ShoppingCart } from "./ShoppingCart.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ChakraProvider>
        <ShoppingCart />
      </ChakraProvider>
    </React.StrictMode>
    ,
  </BrowserRouter>
);
