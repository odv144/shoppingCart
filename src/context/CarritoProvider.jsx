import { useEffect, useReducer, useState } from "react";
import { CarritoContext } from "./CarritoContext";
export const CarritoProvider = ({ children }) => {
  const initialState = [];
  const [canPro, setCanPro] = useState(0);

  const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[CARRITO]-Agregar Producto":
        setCanPro(canPro + 1);
        return [...state, action.payload];

      case "[CARRITO]-Aumentar Cantidad":
        state.map((item) => item.id == action.payload && item.unidades++);
        return [...state];

      case "[CARRITO]-Disminuir Cantidad":
        state.map((item) => item.id == action.payload && item.unidades>0&&item.unidades--);
        return [...state];

      case "[CARRITO]-Eliminar Producto":
        setCanPro(canPro - 1);
        return state.filter((compra) => compra.id !== action.payload);
      default:
        return state;
    }
  };
  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

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

  return (
    <CarritoContext.Provider
      value={{
        canPro,
        listaCompras,
        // agregarCompra,
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra,
        productoExistente,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
