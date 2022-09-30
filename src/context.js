import {React, createContext, useState} from "react";

export const Context = createContext();

export function ContextProvider(props){
    const [noQuantity, setNoQuantity] = useState(false);
    const carrito = () => {
        let data = JSON.parse(localStorage.getItem("carrito"));
        return data == null ? [] : data;
    }
    const addCarrito = (item, quantity) => {
        if(quantity > 0){
            setNoQuantity(false);
            let newArray = [];
            carrito().map(
                (element) => {
                    newArray.push(element);
                }
            );
            let newObject = structuredClone(item);
            newObject.quantity = quantity;
            newArray.push(newObject);
            localStorage.setItem("carrito",JSON.stringify(newArray));
            window.location.href = "/Carrito";
        }else{
            setNoQuantity(true);
        }
    
    }
    const removeFromCarrito = (item) => {
        let newArray = [];
        carrito().map(
            (element) => {
                if(element.name != item.name){
                    newArray.push(element);
                }
            }
        );
        localStorage.setItem("carrito",JSON.stringify(newArray));
        window.location.href = "/Carrito";
    }
    const checkProducts = (products) => {
        let newArray = [];
        let nameArray = [];
        carrito().map(  ({name}) => {nameArray.push(name);}  );
        products.map(
            (product) => {
                if(nameArray.indexOf(product.name) == -1){
                    newArray.push(product);
                }
            }
        );
        return newArray;
    }
    return (
        <Context.Provider
            value={{
                carrito,
                addCarrito,
                removeFromCarrito,
                checkProducts,
                noQuantity,
                setNoQuantity
            }}
        >{props.children}</Context.Provider>
    )
}