import React from 'react'
import ReactDOM from 'react-dom/client'
import { ShoppingCart } from './ShoppingCart.jsx'
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ShoppingCart />
    </ChakraProvider>
  </React.StrictMode>,
)
