import { collection, getDoc, getDocs, query, where, doc } from 'firebase/firestore'
import { db } from '../config/firebase'

// import {writeBatch, doc} from 'firebase/firestore'
// import data from './data.json'
// import { v4 as uuid } from 'uuid'

// async function initialize() {
//   try {
//     const batch = writeBatch(db)
//     data.forEach((product) => {
//       const ref = doc(db, 'books', uuid())
//       batch.set(ref, product)
//     })
//     await batch.commit()
//   } catch (error) {
//     console.log(error.message)
//   }
// }

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
