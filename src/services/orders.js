import { addDoc, collection } from 'firebase/firestore'
import { db } from '../config/firebase'

const ordersRef = collection(db, 'orders')

export async function insert(data) {
  try {
    const response = await addDoc(ordersRef, data)
    return response.id
  } catch (error) {}
}

export default { insert }
