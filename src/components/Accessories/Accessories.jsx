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

        // getting accessories and categories from db
        const accessoriesCollection = query(collection(db, 'itemsCollection'), where('type', '==', 'accessories'));
        const accessoriesCategoriesCollection = collection(db, 'accessoriesCategories');

        if (!categoryId) {
            // setting all the accessories
            getDocs(accessoriesCollection).then(snapshot => {
                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })

        } else {
            // setting accessories by category
            const filter = query(accessoriesCollection, where('category', '==', categoryId));

            getDocs(filter).then(snapshot => {
                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
        }

        // setting categories
        getDocs(accessoriesCategoriesCollection).then(snapshot => {
            setCategories(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })

    }, [categoryId]);

    return (
        <ItemListContainer productsList={products} categories={categories} />
    )
}

export default Accessories;