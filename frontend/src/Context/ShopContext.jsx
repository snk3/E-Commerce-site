import React, { createContext } from 'react'
import all_product from "../Components/Assets/all_product"

export const ShopContext = createContext();

function ShopContextProvider(props){
    const contextValue = all_product;
    console.log(contextValue);
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider