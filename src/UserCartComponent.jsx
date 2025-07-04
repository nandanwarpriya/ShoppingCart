import React from "react";

const UserCartComponent = ({cartProducts,deleteProductFromCartFunction,totalAmountCalculationFunction,setCartProducts}) => {

    const incrementQuantityFunction = (e,cartItem) =>{
        setCartProducts((prevCartProducts)=>{
            const updatedCart=prevCartProducts.map((prevCartItem)=>prevCartItem.product.id===cartItem.product.id ? {...prevCartItem,quantity:cartItem.quantity+1} : prevCartItem);
            return updatedCart;
        })
    };

    const decrementQuantityFunction = (e,cartItem) =>{
        if(cartItem.quantity <= 1)
            {
                deleteProductFromCartFunction(cartItem.product);
                return;
            }

            setCartProducts((prevCartProducts)=>{
                const updatedCart = prevCartProducts.map((prevCartItem)=>prevCartItem.product.id===cartItem.product.id ? {...prevCartItem,quantity:cartItem.quantity-1}: prevCartItem);
            return updatedCart;
        })
    };

    return(
    <div className={`cart ${cartProducts.length > 0 ? 'active': ''}`}>
        <h2>Your Shopping Cart</h2>
        {cartProducts.length===0 ? (
            <p className="empty-cart">Your cart is Empty.</p>
            ) : (
            <div>
                <ul>
                    {cartProducts.map((cartItem)=>(
                        <li key={cartItem.product.id} className="cart-item">
                            <div>
                                <div className="item-info">
                                    <div className="item-image">
                                        <img src={cartItem.product.image}
                                            alt={cartItem.product.name}/>
                                    </div>
                                    <div className="item-details">
                                        <h3>{cartItem.product.name}</h3>
                                        <p>Price: ₹{cartItem.product.price}</p>
                                    </div>
                                </div>
                                <div>
                                <div className="item-actions">
                                    <button 
                                        onClick={()=>{deleteProductFromCartFunction(cartItem.product)}}>
                                        Remove Product
                                    </button>
                                    <div className="quantity">
                                        <button style={{margin:"1%"}}
                                            onClick={(e)=>{incrementQuantityFunction(e,cartItem)}}> + </button>
                                        <p className="quant">{cartItem.quantity}</p>
                                        <button onClick={(e)=>{decrementQuantityFunction(e,cartItem)}}> - </button>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
                <div className="checkout-section">
                    <div className="checkout-total">
                        <p className="total">Total Amount:
                            ₹{totalAmountCalculationFunction()}
                        </p>
                    </div>
                    <button
                        className="checkout-button"
                        disabled = {cartProducts.length===0 ||
                        totalAmountCalculationFunction()===0}>
                        Proceed to Payment
                    </button>
                </div>
            </div>
            )}
    </div>
    );
}
export default UserCartComponent;