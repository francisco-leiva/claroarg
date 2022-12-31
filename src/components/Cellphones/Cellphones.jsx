import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Cellphones = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const cellphonesCollection = query(collection(db, 'itemsCollection'), where('type', '==', 'cellphones'));
        const cellphonesCategoriesCollection = collection(db, 'cellphonesCategories');

        if (!categoryId) {
            getDocs(cellphonesCollection).then(snapshot => {
                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
            
        } else {
            const filterCategory = query(cellphonesCollection, where('category', '==', categoryId));

            getDocs(filterCategory).then(snapshot => {
                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
        }

        getDocs(cellphonesCategoriesCollection).then(snapshot => {
            setCategories(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })

    }, [categoryId]);

    return (
        <ItemListContainer productsList={products} categories={categories} />
    )
}

export default Cellphones;