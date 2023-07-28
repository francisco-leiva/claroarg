import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import './ItemDetail.scss'
import { getProduct } from '../../functions/firebase'
import { CartContext } from '../../context/CartContext'

export default function ItemDetail() {
  const [prod, setProd] = useState([])
  const [quantity, setQuantity] = useState('')
  const { itemId } = useParams()
  const { addToCart, totalQuantityCart, totalPrice } = useContext(CartContext)

  useEffect(() => {
    getProduct(itemId).then((data) => setProd(data))
  }, [itemId])

  const handleChange = (e) => {
    setQuantity(e.target.value)
  }

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      quantity: quantity,
      totalPrice: product.price * quantity,
    })
    totalQuantityCart()
    totalPrice()
  }

  return (
    <div className='itemDetail'>
      <div className='itemDetail__img'>
        <img src={prod.imgDetail} alt={prod.title} />
      </div>

      <div className='itemDetail__info'>
        <div className='itemDetail__info__description'>
          <h3 className='itemDetail__info__title'>{prod.title}</h3>
          <h4 className='itemDetail__info__price'>${prod.pagePrice}</h4>
        </div>

        <div className='itemDetail__info__shop'>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Cantidad</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={quantity}
                label='Cantidad'
                onChange={handleChange}
              >
                {prod?.stock?.map((number) => {
                  return (
                    <MenuItem key={`menuItem-${number}`} value={number}>
                      {number}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Box>

          <button
            className='itemDetail__info__addToCart'
            onClick={() => handleAddToCart(prod)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}
