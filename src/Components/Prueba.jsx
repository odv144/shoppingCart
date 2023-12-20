import { useContext } from "react"
import { ProductosContext } from "../context/ProductosContext"

export const Prueba = () => {
    const productos = useContext(ProductosContext)
    
  return (
    <div>
        <ul>
            {productos.map(pro => <li>Titulo: {pro.title}</li>)}
        </ul>
         
    </div>
  )
}
