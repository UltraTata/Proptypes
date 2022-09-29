import { React, useContext } from "react";
import { Context } from "../context.js";
import products from "../JSON/products.json";
import ProductCard from "./ProductCard.js";

export default function Products(){
    const {noQuantity} = useContext(Context);
    return(
      <div class="p-3">
        {
          noQuantity ? <div class="p-2 alert alert-warning col-12" role="alert">You ordered 0 quanity.</div> : <></>
        }
        <div class="card-columns">
          
          {
            products.map(
              (product) => <ProductCard product={product}/>
            )
          }
        </div>
      </div>
    )
}