import products from "../JSON/products.json";
import ProductCard from "./ProductCard.js";

export default function Products(){
    return(
      <div class="card-columns">
        {
          products.map(
            (product) => <ProductCard product={product}/>
          )
        }
      </div>
    )
}