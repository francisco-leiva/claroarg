import { createContext, useReducer } from 'react'
import { CartReducer } from './CartReducer'
import { TYPES } from './actionTypes'

export const CartContext = createContext([])

const initialState = {
  cartList: [],
  totalQuantityProducts: 0,
  totalPriceCart: 0,
}

export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  const addToCart = (item) => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: item,
    })
    totalQuantityCart()
    totalPrice()
  }

  const clearCart = () => {
    dispatch({
      type: TYPES.CLEAR_CART,
    })
    totalQuantityCart()
    totalPrice()
  }

  const deleteItem = (itemId) => {
    dispatch({
      type: TYPES.DELETE_ITEM,
      payload: itemId,
    })
    totalQuantityCart()
    totalPrice()
  }

  const totalQuantityCart = () => {
    dispatch({
      type: TYPES.TOTAL_QUANTITY_CART,
    })
  }

  const totalPrice = () => {
    dispatch({
      type: TYPES.TOTAL_PRICE_CART,
    })
  }

  return (
    <CartContext.Provider
      value={{
        cartList: state.cartList,
        totalQuantityProducts: state.totalQuantityProducts,
        totalPriceCart: state.totalPriceCart,
        addToCart,
        clearCart,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
