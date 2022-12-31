import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../context/CartContext';
import Cart from "../Cart/Cart";
import EmptyCart from '../EmptyCart/EmptyCart';

const CartContainer = () => {
    const { cartList, totalPriceCart, clearCart, totalQuantityCart, totalPrice } = useContext(CartContext);

    const handleClearCart = () => {
        clearCart();
        totalQuantityCart();
        totalPrice();
    }

    return (
        <div className='cart__container'>
            {
                cartList.length === 0
                    ? <EmptyCart />
                    : <div>
                        <Cart />
                        <div className='cart__container__totalPrice'>
                            <h3>Total:</h3>
                            <p>${totalPriceCart}</p>
                        </div>
                        <div className='cart__container__buttons'>
                            <Button variant="danger" onClick={() => handleClearCart()}>VACIAR CARRITO</Button>
                            <Link to={'/checkout'}><Button variant="success">FINALIZAR COMPRA</Button></Link>
                        </div>
                    </div>
            }
        </div>
    )
}

export default CartContainer;