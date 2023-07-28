import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge'
import './CartWidget.scss'
import { CartIcon } from '../Icons/Icons'
import { CartContext } from '../../context/CartContext'

export default function CartWidget() {
  const { totalQuantityProducts } = useContext(CartContext)

  return (
    <Link to={'/cart'} className='navbar__cart__link'>
      <div className='navbar__cart'>
        <Badge
          color='secondary'
          overlap='circular'
          badgeContent={totalQuantityProducts}
        >
          <CartIcon />
        </Badge>
      </div>
    </Link>
  )
}
