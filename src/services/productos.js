import { collection, getDoc, getDocs, query, where, doc } from 'firebase/firestore'
import { db } from '../config/firebase'

const booksRef = collection(db, 'books')

async function getAll() {
  const querySnapshot = await getDocs(booksRef)
  const data = []
  querySnapshot?.forEach((doc) => {
    data?.push({ id: doc.id, ...doc.data() })
  })
  return data
}

async function getByCategory(category) {
  // Create a query against the collection.
  const q = query(booksRef, where('category', '==', category.toLowerCase()))
  const querySnapshot = await getDocs(q)
  const data = []
  querySnapshot?.forEach((doc) => {
    data?.push({ id: doc.id, ...doc.data() })
  })
  return data
}

async function getById(id) {
  // Create a query against the collection.
  const querySnapshot = await getDoc(doc(db, 'books', id))
  return querySnapshot.data()
}

export const itemCollection = { getAll, getByCategory, getById }
