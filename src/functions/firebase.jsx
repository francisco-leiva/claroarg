import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
} from 'firebase/firestore'

export async function getProducts() {
  const db = getFirestore()
  const data = await getDocs(collection(db, 'itemsCollection'))

  return data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

export async function getPhonesCategories() {
  const db = getFirestore()
  const data = await getDocs(collection(db, 'cellphonesCategories'))

  return data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

export async function getAccessoriesCategories() {
  const db = getFirestore()
  const data = await getDocs(collection(db, 'accessoriesCategories'))

  return data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

export async function getProduct(prodId) {
  const db = getFirestore()
  const data = await getDoc(doc(db, 'itemsCollection', prodId))

  if (data.exists()) {
    return { id: data.id, ...data.data() }
  }
}

export function sendOrder(order) {
  const db = getFirestore()
  const ordersCollection = collection(db, 'orders')

  addDoc(ordersCollection, order).then(({ id }) => console.log(id))
}
