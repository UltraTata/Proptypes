import { React, useState, useContext } from "react";
import { Context } from "../context.js";
import PropTypes from 'prop-types';

export default function ProductCard({product}){
    const [quantity, setQuantity] = useState(0);
    const {addCarrito, removeFromCarrito} = useContext(Context);
    return(
        <div 
            class="card m-3"
            style={
                {
                    backgroundColor:"var(--product-card-bg)",
                    color: "var(--product-card-main)",
                    borderColor: "var(--product-card-main)",
                    borderWidth: "3px"
                }
            }
        >
        <img class="card-img-top" src={product.img} alt="Product image"/>
        <div class="card-body">
            <h5 class="card-title">{product.name}</h5>
            <p class="card-text">{product.description}</p>
            <p class="card-text">
            Quantity:  
            
            {
                product.quantity === undefined
                ?
                <input 
                    value={quantity} 
                    type="number" 
                    min={0} 
                    max={product.stock} 
                    onChange={(e) => {setQuantity(e.target.value)}}
                    style={{backgroundColor: "var(--product-card-bg)", borderColor: "var(--product-card-main)", color: "var(--product-card-main)"}}
                />
                :
                <span>{product.quantity}</span>
            }
            <br/>
            Stock: {product.stock}
        </p>
        {
            product.quantity === undefined
            ?
            <button 
                class="btn btn-product-card" 
                onClick={() => {addCarrito(product,quantity)}}
            >Order</button>
            :
            <button 
                class="btn btn-product-card" 
                onClick={() => {removeFromCarrito(product)}}
            >Remove</button>
        }
        
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