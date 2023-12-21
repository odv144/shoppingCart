import { useRoutes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Carrito } from "./pages/Carrito";
import { Home } from "./pages/Home";
import { Header } from "./Components/Header";
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import { DetailsPro } from "./pages/DetailsPro";
import Contacto from "./pages/Contacto";
import { Login } from "./pages/Login";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/carrito",
    element: <Carrito />,
  },
  {
    path:'/login',
    element:<Login/>
  }
];

export const ShoppingCart = () => {
  const element = useRoutes(routes);
  // const [carrito, setCarrito] = useState({});
  // const [canPro, setCanPro] = useState(0);

  return (
    <>
      <Header />

      <NavBar />

      <Routes>
        <Route path={"/"} element={<Home />}>
          Home
        </Route>

        <Route path={"/carrito"} element={<Carrito></Carrito>}>
          Carrito
        </Route>
        <Route path={'/contacto'}element={<Contacto></Contacto>}>
        Contacto
        </Route>
        <Route path={"/login"} element={<Login />} />
        
        <Route path={"/:producto"} element={<DetailsPro />} />

        <Route path={"/*"} element={<Navigator to={"/"} />}></Route>
      </Routes>

      <Footer />
    </>
  );
};
