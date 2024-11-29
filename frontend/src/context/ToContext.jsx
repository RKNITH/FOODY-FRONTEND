import { createContext, useState } from 'react';
import { food_list } from '../assets/assets';

// Create the context
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    // State for cart items
    const [cartItem, setCartItem] = useState({});

    // Function to add items to the cart
    const addToCart = (itemId) => {
        setCartItem((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
    };

    // Function to remove items from the cart
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({
            ...prev,
            [itemId]: Math.max((prev[itemId] || 1) - 1, 0), // Avoid negative quantities
        }));
    };


    // Function to find total amount

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItem[item];
                }
            }

        }
        return totalAmount;

    }

    // Context value
    const contextValue = {
        food_list,
        addToCart,
        removeFromCart,
        cartItem,
        setCartItem,
        getTotalCartAmount
    };

    // Provide context to children
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
