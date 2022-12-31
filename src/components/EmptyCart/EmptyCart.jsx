import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const EmptyCart = () => {
    return (
        <div className='emptyCart'>
            <h2 className='emptyCart__title'>El carrito está vacío</h2>
            <div className='emptyCart__links'>
                <Link to={'/cellphones'} className='emptyCart__link'><Button variant="contained">Ir a Celulares</Button></Link>
                <Link to={'/accessories'} className='emptyCart__link'><Button variant="contained">Ir a Accesorios</Button></Link>
            </div>
        </div>
    )
}

export default EmptyCart;