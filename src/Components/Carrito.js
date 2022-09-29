import { React, useContext } from "react";
import { Context } from "../context.js";
import ProductCard from "./ProductCard.js";

export default function Carrito(){
    const context = useContext(Context);
    console.log(context.carrito)
    return(
      <div class="card-columns">
        {
          context.carrito.map(
            (product) => <ProductCard product={product}/>
          )
        }
      </div>
    )
}