// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsKEqyMai9eIm-p5t-2QM8otpI7Tzz8do",
  authDomain: "bookify-88b37.firebaseapp.com",
  projectId: "bookify-88b37",
  storageBucket: "bookify-88b37.appspot.com",
  messagingSenderId: "574837804092",
  appId: "1:574837804092:web:c213a4506fcd6bd3840739",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseStorage = getStorage(firebaseApp);

// Utilities
export const getImageUrlFromPath = (path) => {
  const reference = ref(firebaseStorage, path);
  return getDownloadURL(reference);
};
