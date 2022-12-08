import { Products } from '../../mock';
import Item from '../Item/Item';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemList = () => {
    const [item, setItem] = useState(Products);
    const { categoryId } = useParams();

    const FilterCategory = new Promise((resolved, rejected) => {
        setTimeout(() => {
            const newProductos = Products.filter((p) => p.category == categoryId);

            newProductos.length != 0 ? resolved(newProductos) : resolved(Products);
            
        }, 2000)
    });

    useEffect(() => {
        FilterCategory.then((response) => {
            setItem(response)
        })
    }, [categoryId]);

    return (
        item.map(prod => {
            return (
                <Item item={prod} key={prod.img} />
            )
        })
    );
};

export default ItemList;