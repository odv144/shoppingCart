import { useEffect, useReducer, useState } from "react";
import { CarritoContext } from "./CarritoContext";
import { LoginContext } from "./LoginContext";

const guardarCarrito = (value) => {
  try {
    window.localStorage.setItem("producto", JSON.stringify(value, null, 2));

    //console.log(recupero);
  } catch (error) {
    console.error(error);
  }
};

const cargarCarrito = () => {
  try {
    if (window.localStorage.getItem("producto") != undefined) {
      let recupero = window.localStorage.getItem("producto");
      return recupero;
    }
  } catch (error) {
    console.error(error);
  }
};

export const CarritoProvider = ({ children }) => {
  const [initialState, setInicial] = useState([]);

  const [canPro, setCanPro] = useState(0);

  const comprasReducer = (state = cargarCarrito(), action = {}) => {
    let rta;
    switch (action.type) {
      case "[CARRITO]-Agregar Producto":
        setCanPro(canPro + 1);
        rta = [...state, action.payload];
        guardarCarrito(rta);
        break;
        return [...state, action.payload];

      case "[CARRITO]-Aumentar Cantidad":
        state.map((item) => item.id == action.payload && item.unidades++);
        rta = [...state];
        guardarCarrito(rta);
        break;
        return [...state];

      case "[CARRITO]-Disminuir Cantidad":
        state.map((item) => {
          if (item.id == action.payload && item.unidades > 0) {
            item.unidades--;
            rta = [...state];
          }
          else if(item.id == action.payload && item.unidades == 0);
          {
            rta = state.filter((item) => item.id != action.payload);
          }
        });

        guardarCarrito(rta);
        break;
        return [...state];

      case "[CARRITO]-Eliminar Producto":
        setCanPro(canPro - 1);
        return state.filter((compra) => compra.id !== action.payload);
      case "[CARRITO]-Limpiar":
        setCanPro(0);
        return (state = initialState);
      default:
        return state;
    }
    return rta;
  };
  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);
  const buscarProducto = (id) => {
    // const productoComprado = (listaCompras.filter((item) => item.id == id))
    const productoComprado = listaCompras.find((item) => item.id == id);

    return productoComprado;
  };

  const productoExistente = (compra) => {
    listaCompras.find((item) => item.id == compra.id)
      ? aumentarCantidad(compra.id)
      : agregarCompra(compra);
  };

  const agregarCompra = (compra) => {
    compra.unidades = 1;
    const action = {
      type: "[CARRITO]-Agregar Producto",
      payload: compra,
    };
    dispatch(action);
  };
  const aumentarCantidad = (id) => {
    console.log(id);
    const action = {
      type: "[CARRITO]-Aumentar Cantidad",
      payload: id,
    };
    dispatch(action);
  };

  const disminuirCantidad = (id) => {
    const action = {
      type: "[CARRITO]-Disminuir Cantidad",
      payload: id,
    };
    dispatch(action);
  };
  const eliminarCompra = (id) => {
    const action = {
      type: "[CARRITO]-Eliminar Producto",
      payload: id,
    };
    dispatch(action);
  };
  const vaciarCarrito = () => {
    const action = {
      type: "[CARRITO]-Limpiar",
      payload: "",
    };
    dispatch(action);
  };

  const [cliente,setCliente]=useState({})

  return (
    <CarritoContext.Provider
      value={{
        canPro,
        listaCompras,
        // agregarCompra,
        vaciarCarrito,
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra,
        productoExistente,
        buscarProducto,
        cliente,
        setCliente
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
