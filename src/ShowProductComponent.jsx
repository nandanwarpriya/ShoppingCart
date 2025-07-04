import React from "react";

function ShowProductComponent ({products,filterProductFunction,addProductToCartFunction}){
    
    return(
        <div className="product-list">
            {filterProductFunction.length===0 ? (
                <p className="no-results">sorry! No matching product found.</p>
            ):(
                filterProductFunction.map((product)=>(
                    <div className="product" key={product.id}>
                        <img src={product.image} alt={product.name}/>
                        <h2>{product.name}</h2>
                        <p>Price: ₹{product.price} </p>
                        <button className="add-to-cart-button" onClick={()=>addProductToCartFunction(product)}>
                            Add to Shopping Cart
                        </button>
                    </div>

                ))
            )}       
        </div>
    );
};
export default ShowProductComponent;