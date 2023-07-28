import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getAccessoriesCategories } from '../../functions/firebase'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

export default function Accessories() {
  const [accessories, setAccessories] = useState([])
  const [categories, setCategories] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    if (!categoryId) {
      // setting all the accessories
      getProducts().then((data) => {
        const filterAccessories = data.filter(
          (prod) => prod.type === 'accessories'
        )
        setAccessories(filterAccessories)
      })
    } else {
      // setting accessories by category
      getProducts().then((data) => {
        const filterAccessoriesByCategory = data.filter(
          (prod) => prod.type === 'accessories' && prod.category === categoryId
        )
        setAccessories(filterAccessoriesByCategory)
      })
    }

    // setting categories
    getAccessoriesCategories().then((data) => setCategories(data))
  }, [categoryId])

  return (
    <ItemListContainer productsList={accessories} categories={categories} />
  )
}
