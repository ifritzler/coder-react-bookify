// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getDownloadURL, getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBvXJVNnsXTisFeEXDbCRKTL5pTHh_Kocc',
  authDomain: 'bookify-3c67a.firebaseapp.com',
  projectId: 'bookify-3c67a',
  storageBucket: 'bookify-3c67a.appspot.com',
  messagingSenderId: '9516885361',
  appId: '1:9516885361:web:acdd167759dc85347002d0',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore()
export const firebaseStorage = getStorage(firebaseApp)

// Utilities
export const getImageUrlFromPath = async (path) => {
  const reference = ref(firebaseStorage, path)
  return getDownloadURL(reference)
}
