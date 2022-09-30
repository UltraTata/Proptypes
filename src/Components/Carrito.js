import { React, Text, useContext } from "react";
import { Context } from "../context.js";
import ProductCard from "./ProductCard.js";

export default function Carrito(){
    const {carrito} = useContext(Context);
    return(
      <div class="card-columns p-3">
        <a href="/Products">
          <button class="btn btn-product-card m-3">Buy products</button>
        </a>
        {
          carrito().map(
            (product) => <ProductCard product={product}/>
          )
        }
        {
          carrito().length == 0 ? <Text>No hay elementos en el carrito</Text> : <></>
        }
      </div>
    )
}