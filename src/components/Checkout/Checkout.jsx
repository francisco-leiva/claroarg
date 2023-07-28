import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore'
import Button from 'react-bootstrap/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import './Checkout.scss'
import { CartContext } from '../../context/CartContext'

export default function Checkout() {
  const { cartList, totalPriceCart, clearCart, totalQuantityCart, totalPrice } =
    useContext(CartContext)
  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()

  const order = {
    buyer: {
      name: name,
      phone: phone,
      email: email,
    },
    items: cartList,
    total: totalPriceCart,
    date: serverTimestamp(),
  }

  const sendOrder = () => {
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')

    addDoc(ordersCollection, order).then(({ id }) => console.log(id))
  }

  const handleFinishBuying = () => {
    sendOrder()
    clearCart()
    totalQuantityCart()
    totalPrice()

    Swal.fire('Compra realizada con éxito', 'Que lo disfrutes!', 'success')
  }

  return (
    <div className='checkout__container'>
      <Box
        component='form'
        className='checkout__form'
        noValidate
        autoComplete='off'
      >
        <div className='checkout__form__sections'>
          <label>Nombre</label>

          <TextField
            required
            id='outlined-required'
            className='checkout__form__sections--textField'
            color='error'
            label='Required'
            placeholder='Juan'
            onKeyUp={(e) => setName(e.target.value)}
          />
        </div>

        <div className='checkout__form__sections'>
          <label>Teléfono</label>

          <TextField
            required
            id='outlined-required'
            className='checkout__form__sections--textField'
            color='error'
            label='Required'
            placeholder='+54 333 333333'
            onKeyUp={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className='checkout__form__sections'>
          <label>Email</label>

          <TextField
            required
            type='email'
            id='outlined-required'
            className='checkout__form__sections--textField'
            color='error'
            label='Required'
            placeholder='hola@gmail.com'
            onKeyUp={(e) => setEmail(e.target.value)}
          />
        </div>
      </Box>

      <div className='checkout__detail'>
        <h3 className='checkout__detail__title'>Detalle</h3>

        {cartList.map((prod) => {
          return (
            <div className='checkout__detail__prod' key={prod.id}>
              <div className='checkout__detail__prod--title'>
                <h4>{prod.title}</h4>
                <p>Cantidad: {prod.quantity}</p>
              </div>

              <div className='checkout__detail__prod--price'>
                <p>${prod.totalPrice}</p>
              </div>
            </div>
          )
        })}

        <div className='checkout__detail__totalPrice'>
          <h4>Total:</h4>
          <p>${totalPriceCart}</p>
        </div>
      </div>

      <div className='checkout__btn'>
        <Button variant='success' onClick={() => handleFinishBuying()}>
          <Link to={'/'}>CONFIRMAR COMPRA</Link>
        </Button>
      </div>
    </div>
  )
}
