import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyDJPq9a0YPoQYkpQ-Uaw7aXQRXzzqOKzFA",
//     authDomain: "web-kelas-tes.firebaseapp.com",
//     projectId: "web-kelas-tes",
//     storageBucket: "web-kelas-tes.appspot.com",
//     messagingSenderId: "890817433268",
//     appId: "1:890817433268:web:11e5258f8864a6174c11e1"
// };
const firebaseConfig = {
    apiKey: "AIzaSyDnRfZjWouwhoAHm4C3st9LMuhDimN8dFc",
    authDomain: "portfolio-802b3.firebaseapp.com",
    projectId: "portfolio-802b3",
    storageBucket: "portfolio-802b3.firebasestorage.app",
    messagingSenderId: "831545518011",
    appId: "1:831545518011:web:81c2156288fa711817069e",
    measurementId: "G-Y0EBCZVTFP"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };



