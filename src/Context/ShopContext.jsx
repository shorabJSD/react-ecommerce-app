 import reac, { createContext, useState } from "react";
import all_product from '../Components/assets/all_product';
 export const ShopContext = createContext(null);

const getDeafalutCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart
}


 const ShopContextProvider = (props)=>{
     const [cartItems, setCartItems] = useState(getDeafalutCart())
     const contextValue = {all_product, cartItems};
     console.log(cartItems);
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
 };

 export default ShopContextProvider;