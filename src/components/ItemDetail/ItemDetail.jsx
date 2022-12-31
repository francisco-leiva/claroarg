import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';

const ItemDetail = () => {
    const [prod, setProd] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const { itemId } = useParams();
    const { addToCart, totalQuantityCart, totalPrice } = useContext(CartContext);


    useEffect(() => {
        const db = getFirestore();
        const getProd = doc(db, 'itemsCollection', itemId);

        getDoc(getProd).then(snapshot => {
            if (snapshot.exists()) {
                setProd([{ id: snapshot.id, ...snapshot.data() }]);
            }
        })

    }, [itemId]);

    const handleAddToCart = (product) => {
        addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            img: product.img,
            quantity: quantity,
            totalPrice: (product.price * quantity)
        })
        totalQuantityCart();
        totalPrice();
    }

    return (
        prod && prod.map(product => {
            return (
                <div className='itemDetail' key={product.id}>
                    <div className='itemDetail__img'>
                        <img src={product.imgDetail} alt={product.title} />
                    </div>
                    <div className='itemDetail__info'>
                        <div className='itemDetail__info__description'>
                            <h3 className='itemDetail__info__title'>{product.title}</h3>
                            <h4 className='itemDetail__info__price'>${product.pagePrice}</h4>
                        </div>

                        <div className='itemDetail__info__shop'>
                            <input type='number' className='itemDetail__info__quantity' defaultValue={1} min={1} max={product.stock} onChange={(e) => setQuantity(parseInt(e.target.value))} />
                            <button className='itemDetail__info__addToCart' onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            )
        })
    )
};

export default ItemDetail;