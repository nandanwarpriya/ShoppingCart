import React,{useState} from 'react';
import SearchComponent from './SearchComponent';
import ShowProductComponent from './ShowProductComponent';
import UserCartComponent from './UserCartComponent';
import './App.css';

function App() {
  const products =[    //holds the list of available products
    {
      id:1,
      name:'Godrej 180L Refridgerator',
      price:12490,
      image:'https://m.media-amazon.com/images/I/41WMwV27S7L._SY445_SX342_QL70_FMwebp_.jpg'
    },
    {
      id:2,
      name:'Lloyd 1.5 Inverter Split AC',
      price:33290,
      image:'https://m.media-amazon.com/images/I/41D8PibHJjL._SX466_.jpg'
    },
    {
      id:3,
      name:'LG 7kg TopLoad Washing Machine',
      price:20000,
      image:'https://m.media-amazon.com/images/I/71BZCfuDANL._SY500_.jpg'

    }
  ]
  
  const[cartProducts,setCartProducts]=useState([]);  //tracks items the user adds to their cart, including quantity
  const[searchProduct,setSearchProduct]=useState("");  // tracks the search input text from the user

  const addProductToCartFunction = (inputProduct) =>{   
    //check if product is already in cart, if yes, then increase the quantity. if no, then add new product with quantity 1
    const existingProducts = cartProducts.find(cartItem=>cartItem.product.id===inputProduct.id);  
    //this is shorthand for 
    // const existingProducts = cartProducts.find(function(cartItem){return (cartItem.prod.id===inputProduct.id)})

    if(existingProducts){
      const latestCartUpdate = cartProducts.map(cartItem=>cartItem.product.id===inputProduct.id ? {...cartItem,quantity: cartItem.quantity+1}:cartItem);
      setCartProducts(latestCartUpdate);
    }
    else{
      setCartProducts([...cartProducts,{product:inputProduct,quantity:1}]);
    }
  };

  const deleteProductFromCartFunction =(inputProduct) =>{
    const updatedCart = cartProducts.filter(cartItem => cartItem.product.id !== inputProduct.id)
    setCartProducts(updatedCart);
  };

  const totalAmountCalculationFunction = () =>{
    return cartProducts.reduce((total,cartItem)=>total + cartItem.product.price * cartItem.quantity,0); //0 is the initial value of the 1st parameter in the callback function
  };

  const productSearchUserFunction = (event) =>{  //handles serch input field changes
    setSearchProduct(event.target.value);
  };

  const filterProductFunction = products.filter((product)=>
    product.name.toLowerCase().includes(searchProduct.toLowerCase())
  );
  /*const filterProductFunction = ()=>{
    const isMatch = products.filter(product=> product.name.toLowerCase().include(searchProduct.toLowerCase()))
    return isMatch;
    } */

  return (
    <div className="App">
      <SearchComponent searchProduct={searchProduct} 
                      productSearchUserFunction={productSearchUserFunction}/>
     <main className="App-main">
          <ShowProductComponent products={products}
                                filterProductFunction={filterProductFunction}
                                addProductToCartFunction={addProductToCartFunction}/>
          <UserCartComponent cartProducts={cartProducts}
                            deleteProductFromCartFunction={deleteProductFromCartFunction}
                            totalAmountCalculationFunction={totalAmountCalculationFunction}
                            setCartProducts={setCartProducts}/>
      </main>
    </div>
  );
}

export default App;
