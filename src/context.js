import {React, createContext, useState} from "react";

export const Context = createContext();

export function ContextProvider(props){
    const [carrito, setCarrito] = useState([]);
    const addCarrito = (item, quantity) => {
        let newArray = [];
        carrito.map(
            (element) => {
                newArray.push(element);
            }
        );
        let newObject = structuredClone(item);
        newObject.quantity = quantity;
        newArray.push(newObject);
    }
    return (
        <Context.Provider
            value={{
                carrito,
                addCarrito
            }}
        >{props.children}</Context.Provider>
    )
}