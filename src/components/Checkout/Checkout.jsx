import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {
    const { cartList, totalPriceCart, clearCart, totalQuantityCart, totalPrice } = useContext(CartContext);
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();

    const order = {
        buyer: {
            name: name,
            phone: phone,
            email: email,
        },
        items: cartList,
        total: totalPriceCart,
        date: serverTimestamp()
    };

    const sendOrder = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order).then(({ id }) => console.log(id))
    };

    const handleFinishBuying = () => {
        sendOrder();
        clearCart();
        totalQuantityCart();
        totalPrice();

        Swal.fire(
            'Compra realizada con éxito',
            'Que lo disfrutes!',
            'success'
        )
    }

    return (
        <div className='checkout__container'>
            <form className='checkout__container__form'>
                <div className='checkout__container__form__sections'>
                    <label>Nombre</label>
                    <input type='text' placeholder='Juan' onKeyUp={(e) => setName(e.target.value)} />
                </div>
                <div className='checkout__container__form__sections'>
                    <label>Teléfono</label>
                    <input type='text' placeholder='+54 333 333333' onKeyUp={(e) => setPhone(e.target.value)} />
                </div>
                <div className='checkout__container__form__sections'>
                    <label>Email</label>
                    <input type='email' placeholder='hola@gmail.com' onKeyUp={(e) => setEmail(e.target.value)} />
                </div>
            </form>

            <div className='checkout__container__detail'>
                <h3 className='checkout__container__detail__title'>Detalle</h3>

                {
                    cartList.map((prod) => {
                        return (
                            <div className='checkout__container__detail__prod' key={prod.id}>
                                <div className='checkout__container__detail__prod__title'>
                                    <h4>{prod.title}</h4>
                                    <p>Cantidad: {prod.quantity}</p>
                                </div>

                                <div className='checkout__container__detail__prod__price'>
                                    <p>${prod.totalPrice}</p>
                                </div>
                            </div>
                        )
                    })
                }

                <div className='checkout__container__detail__totalPrice'>
                    <h4>Total:</h4>
                    <p>${totalPriceCart}</p>
                </div>
            </div>

            <div className='checkout__container__btn'>
                <Link to={'/'}><Button variant='success' onClick={() => handleFinishBuying()}>CONFIRMAR COMPRA</Button></Link>
            </div>
        </div>
    )
}

export default Checkout;