import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import CartIcon from '../Icons/CartIcon';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { totalQuantityProducts } = useContext(CartContext);

  return (
    <Link to={'/cart'} className='navbar__cart__link'>
      <div className='navbar__cart'>
        <Badge color="secondary" overlap="circular" badgeContent={totalQuantityProducts}>
          <CartIcon />
        </Badge>
      </div>
    </Link>
  )
}

export default CartWidget;