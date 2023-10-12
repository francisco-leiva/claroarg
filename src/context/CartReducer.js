import { TYPES } from './actionTypes'

export function CartReducer(state, action) {
  const { type } = action

  if (type === TYPES.ADD_TO_CART) {
    const isInCart = state.cartList.some(
      (prod) => prod.id === action.payload.id
    )

    if (isInCart) {
      const filter = state.cartList.filter(
        (prod) => prod.id !== action.payload.id
      )

      filter.push(action.payload)

      return {
        ...state,
        cartList: filter,
      }
    } else {
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
      }
    }
  }

  if (type === TYPES.DELETE_ITEM) {
    return {
      ...state,
      cartList: state.cartList.filter((prod) => prod.id !== action.payload),
    }
  }

  if (type === TYPES.CLEAR_CART) {
    return state
  }

  if (type === TYPES.TOTAL_QUANTITY_CART) {
    return {
      ...state,
      totalQuantityProducts: state.cartList.reduce(
        (acc, product) => acc + product.quantity,
        0
      ),
    }
  }

  if (type === TYPES.TOTAL_PRICE_CART) {
    return {
      ...state,
      totalPriceCart: state.cartList.reduce(
        (acc, product) => acc + product.totalPrice,
        0
      ),
    }
  }

  return state
}
