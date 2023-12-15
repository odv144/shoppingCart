import { useRoutes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Carrito } from "./pages/Carrito";
import { Home } from "./pages/Home";
import { useState } from "react";

import { Header } from "./Components/Header";
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import { DetailsPro } from "./pages/DetailsPro";
import { ProductosProvider } from "./context/ProductosProvider";

const routes=[
  {
    path:'/',
    element:<Home 
       
        />
  },
  {
    path:'/carrito',
    element:<Carrito/>
  }
]


export const ShoppingCart = () => {
  const element = useRoutes(routes)
  const [carrito,setCarrito] = useState({})
  const [canPro, setCanPro] = useState(0);

  const onAddCanPro = () => {
    setCanPro(canPro + 1);
  };
  const onDelCanPro = () => {
    setCanPro(canPro - 1);
  };

  return (
    <ProductosProvider>

    <Header/>
    <NavBar canPro={canPro} />
   
     <Routes>
        <Route  path={'/'} element={<Home
            canPro={canPro}
            onAddCanPro={onAddCanPro} 
            onDelCanPro={onDelCanPro}/>}>Home</Route>
        
        <Route  path={'/carrito'}element={<Carrito></Carrito>}>Carrito</Route>
        <Route  path={'/:producto'}element={<DetailsPro/>}/>
       
        <Route  path={'/*'}element={<Navigator to={'/'}/>}></Route>
      </Routes>
     
   
    <Footer/>    
   
     
    </ProductosProvider>
    
  );
};
