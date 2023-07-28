import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getPhonesCategories } from '../../functions/firebase'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

export default function Cellphones() {
  const [phones, setPhones] = useState([])
  const [categories, setCategories] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    if (!categoryId) {
      // setting all the phones
      getProducts().then((data) => {
        const filterPhones = data.filter((prod) => prod.type === 'cellphones')
        setPhones(filterPhones)
      })
    } else {
      // setting phones by category
      getProducts().then((data) => {
        const filterPhonesByCategory = data.filter(
          (prod) => prod.type === 'cellphones' && prod.category === categoryId
        )
        setPhones(filterPhonesByCategory)
      })
    }

    // setting categories
    getPhonesCategories().then((data) => setCategories(data))
  }, [categoryId])

  return <ItemListContainer productsList={phones} categories={categories} />
}
