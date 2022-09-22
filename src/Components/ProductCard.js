import { React, useState, useContext } from "react";
import { Context } from "../context.js";
import PropTypes from 'prop-types';

export default function ProductCard({product}){
    const [quantity, setQuantity] = useState(0);
    const {addCarrito} = useContext(Context);
    return(
        <div class="card">
        <img class="card-img-top" src={product.img} alt="Product image"/>
        <div class="card-body">
          <h5 class="card-title">{product.name}</h5>
          <p class="card-text">{product.description}</p>
          <p class="card-text">
            Quantity: 
            <input 
                value={quantity} 
                type="number" 
                min={0} 
                max={product.stock} 
                onChange={(e) => {setQuantity(e.target.value)}}
            />
            <br/>
            Stock: {product.stock}
        </p>
        <button class="btn btn-primary" onClick={() => {addCarrito(product,quantity)}}>Order</button>
        </div>
      </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape(
        {
            "name": PropTypes.string,
            "description": PropTypes.string,
            "img": PropTypes.string,
            "price": PropTypes.number,
            "paymentMethods": PropTypes.array,
            "PaymentScheme": PropTypes.array,
            "stock": PropTypes.number
        }
    )
};