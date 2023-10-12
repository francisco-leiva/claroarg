import { useContext } from 'react'
import Button from '@mui/material/Button'
import './Cart.scss'
import { CartContext } from '../../context/CartContext'

export default function Cart() {
  const { cartList, deleteItem } = useContext(CartContext)

  return cartList.map((prod) => {
    return (
      <div className='cart__item' key={prod.id}>
        <div className='cart__item__description'>
          <div className='cart__item__description--img'>
            <img src={prod.img} alt={prod.title} />
          </div>

          <div className='cart__item__description--title'>
            <h3>{prod.title}</h3>
            <p>Cantidad: {prod.quantity}</p>
          </div>
        </div>

        <div className='cart__item__description'>
          <div className='cart__item__description--price'>
            <p>${prod.totalPrice}</p>
          </div>

          <div className='cart__item__description--delete'>
            <Button
              variant='outlined'
              color='error'
              onClick={() => deleteItem(prod.id)}
            >
              Eliminar
            </Button>
          </div>
        </div>
      </div>
    )
  })
}
