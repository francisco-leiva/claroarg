import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const Accessories = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const accessoriesCollection = query(collection(db, 'itemsCollection'), where('type', '==', 'accessories'));
        const accessoriesCategoriesCollection = collection(db, 'accessoriesCategories');

        if (!categoryId) {
            getDocs(accessoriesCollection).then(snapshot => {
                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })

        } else {
            const filter = query(accessoriesCollection, where('category', '==', categoryId));

            getDocs(filter).then(snapshot => {
                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
        }

        getDocs(accessoriesCategoriesCollection).then(snapshot => {
            setCategories(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })

    }, [categoryId]);

    return (
        <ItemListContainer productsList={products} categories={categories} />
    )
}

export default Accessories;