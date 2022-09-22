import {React, createContext, useState} from "react";

export const Context = createContext();

export function ContextProvider(props){
    const [noQuantity, setNoQuantity] = useState(false);
    const [carrito, setCarrito] = useState([]);
    const addCarrito = (item, quantity) => {
        if(quantity > 0){
            let newArray = [];
            carrito.map(
                (element) => {
                    newArray.push(element);
                }
            );
            let newObject = structuredClone(item);
            newObject.quantity = quantity;
            newArray.push(newObject);
            setCarrito(newArray);
            window.location.href = "/Carrito";
        }
    }
    return (
        <Context.Provider
            value={{
                carrito,
                addCarrito,
                noQuantity,
                setNoQuantity
            }}
        >{props.children}</Context.Provider>
    )
}