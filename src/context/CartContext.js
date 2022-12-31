import { createContext, useReducer } from "react";
import { CartReducer } from './CartReducer'

export const CartContext = createContext([]);

const initialState = {
    cartList: [],
    totalQuantityProducts: 0,
    totalPriceCart: 0
}

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = (item) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: item
        })
    }

    const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART',
        })
    }

    const deleteItem = (itemId) => {
        dispatch({
            type: 'DELETE_ITEM',
            payload: itemId
        })
    }

    const totalQuantityCart = () => {
        dispatch({
            type: 'TOTAL_QUANTITY_CART'
        })
    }

    const totalPrice = () => {
        dispatch({
            type: 'TOTAL_PRICE_CART'
        })
    }

    return (
        <CartContext.Provider value={{
            cartList: state.cartList, 
            totalQuantityProducts: state.totalQuantityProducts,
            totalPriceCart: state.totalPriceCart, 
            addToCart, 
            clearCart, 
            deleteItem,
            totalQuantityCart,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}