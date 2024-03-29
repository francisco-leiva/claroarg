import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './CartContainer.scss'
import { CartContext } from '../../context/CartContext'
import Cart from '../Cart/Cart'
import EmptyCart from '../EmptyCart/EmptyCart'

export default function CartContainer() {
  const { cartList, totalPriceCart, clearCart } = useContext(CartContext)

  return (
    <div className='cart__container'>
      {cartList.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <Cart />

          <div className='cart__container__totalPrice'>
            <h3>Total:</h3>
            <p>${totalPriceCart}</p>
          </div>

          <div className='cart__container__buttons'>
            <Button variant='danger' onClick={clearCart}>
              VACIAR CARRITO
            </Button>

            <Button variant='success'>
              <Link to={'/checkout'}>FINALIZAR COMPRA</Link>
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
