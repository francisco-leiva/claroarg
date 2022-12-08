import { Products } from '../../mock';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const [producto, setProducto] = useState([]);
    const { id } = useParams();

    const FilterProducto = new Promise((resolved, rejected) => {
        setTimeout(() => {
            const newProducto = Products.filter((p) => p.id == id);

            resolved(newProducto);
        }, 2000)
    })

    useEffect(() => {
        FilterProducto.then((response) => {
            setProducto(response)
        })
    }, [id]);

    return (
        producto && producto.map(prod => {
            return (
                <div className='itemDetail'>
                    <div className='itemDetail__img'>
                        <img src={prod.imgDetail} alt={prod.title} />
                    </div>
                    <div className='itemDetail__info'>
                        <h3 className='itemDetail__info__title'>{prod.title}</h3>
                        <h4 className='itemDetail__info__price'>${prod.price}</h4>

                        <button className='itemDetail__info__button'>Comprar</button>
                    </div>
                </div>

            )
        })
    )
};

export default ItemDetail;