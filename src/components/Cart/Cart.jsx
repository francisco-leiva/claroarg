import { useContext } from 'react';
import Button from '@mui/material/Button';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cartList, deleteItem, totalQuantityCart, totalPrice } = useContext(CartContext);

    const handleDeleteItem = (itemId) => {
        deleteItem(itemId);
        totalQuantityCart();
        totalPrice();
    }

    return (
        cartList.map((prod) => {
            return (
                <div className='cart__item' key={prod.id}>
                    <div className='cart__item__img'>
                        <img src={prod.img} alt={prod.title} />
                    </div>
                    <div className='cart__item__title'>
                        <h3>{prod.title}</h3>
                        <p>Cantidad: {prod.quantity}</p>
                    </div>
                    <div className='cart__item__price'>
                        <p>${prod.totalPrice}</p>
                    </div>

                    <div className='cart__item__delete'>
                        <Button variant="outlined" color="error" onClick={() => handleDeleteItem(prod.id)}>Eliminar</Button>
                    </div>
                </div>
            )
        })
    )
}

export default Cart;