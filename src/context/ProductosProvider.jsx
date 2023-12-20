import { useEffect, useState } from 'react'
import { ProductosContext } from './ProductosContext'


export function ProductosProvider ({children}) {
    // const api = ' https://api.escuelajs.co/api/v1/products'  //requiere cambiar la imagen a images[0]
    const api = ' https://fakestoreapi.com/products'  

  const [productos, setProductos] = useState([])
    const fetchProductos = async()=>{
      
        const response = await fetch(api)
        const data = await response.json()
        // console.log(data);
        setProductos(data)

    }
    useEffect(()=>{
        fetchProductos()
    },[])
    

  return (
    <ProductosContext.Provider value={productos}>
      {children}
    </ProductosContext.Provider>
  )
}
