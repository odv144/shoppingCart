// import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Suspense, lazy } from "react";
 import { CompraConfirmada } from "./pages/CompraConfirmada";
import { RtaMensaje } from "./pages/RtaMensaje";
import { Carrito } from "./pages/Carrito";
import { Home } from "./pages/Home";
import { Header } from "./Components/Header";
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import { DetailsPro } from "./pages/DetailsPro";
import Contacto from "./pages/Contacto";
import { Login } from "./pages/Login";
import { Router } from "./Route";
import { Error404 } from "./pages/Error404";
import DatoCliente from "./pages/DatoCliente";


// const LazyCompraConfirmada = lazy(()=> import('./pages/CompraConfirmada.jsx'))
const appRoutes = [
  {
    path: "/",
    element: Home ,
  },
  {
    path: "/shoppingCart",
    element: Home ,
  },
  {
    path: "/carrito",
    element: Carrito ,
  },
  {
    path: "/login",
    element: Login ,
  },
  {
    path: "/contacto",
    element: Contacto,
  },
  {
    path: "/confirmado",
    element: CompraConfirmada ,
  },
  {
    path: "/datocliente",
    element: DatoCliente ,
  },
  {
    path: "/envio",
    element: RtaMensaje ,
  },
 
  {
    path: "/detalle/:id",
    element: DetailsPro ,
  },
]



export const ShoppingCart = () => {
  return (
    <>
    {/* <Suspense> */}

      <Header />
      <NavBar />
      <Router routes={appRoutes} defaultComponent={'Error404'}/>

      <Footer />
    {/* </Suspense> */}
    </>
  );
};
