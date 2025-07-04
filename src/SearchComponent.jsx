import React from "react";

function SearchComponent ({ searchProduct,productSearchUserFunction}) {
    return(
        <header className="App-header">
            <h1>Shopping Cart</h1>
            <div className="search-bar">
                <input 
                type="text"
                placeholder="search for products..."
                value={searchProduct.searchProduct}
                onChange={(e)=>productSearchUserFunction(e)}
            />
            </div>
            
        </header>
    );
}
export default SearchComponent;