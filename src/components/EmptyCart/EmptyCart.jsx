import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const EmptyCart = () => {
  return (
    <div className='emptyCart'>
      <h2 className='emptyCart__title'>El carrito está vacío</h2>

      <div className='emptyCart__links'>
        <Button variant='contained'>
          <Link to={'/cellphones'} className='emptyCart__link'>
            Ir a Celulares
          </Link>
        </Button>

        <Button variant='contained'>
          <Link to={'/accessories'} className='emptyCart__link'>
            Ir a Accesorios
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default EmptyCart;
