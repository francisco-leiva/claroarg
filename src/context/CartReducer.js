export function CartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
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

    case 'DELETE_ITEM':
      return {
        ...state,
        cartList: state.cartList.filter((prod) => prod.id !== action.payload),
      }

    case 'CLEAR_CART':
      return {
        ...state,
        cartList: [],
      }

    case 'TOTAL_QUANTITY_CART':
      return {
        ...state,
        totalQuantityProducts: state.cartList.reduce(
          (acc, product) => acc + product.quantity,
          0
        ),
      }

    case 'TOTAL_PRICE_CART':
      return {
        ...state,
        totalPriceCart: state.cartList.reduce(
          (acc, product) => acc + product.totalPrice,
          0
        ),
      }

    default:
      break
  }
}
