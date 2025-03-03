import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB-lfUt1adpQ0KYcFFW_oAWTJVfHDOOZy8",
//   authDomain: "portofolio-web-3e8e8.firebaseapp.com",
//   projectId: "portofolio-web-3e8e8",
//   storageBucket: "portofolio-web-3e8e8.appspot.com",
//   messagingSenderId: "25195509306",
//   appId: "1:25195509306:web:2b635dcf997137bf612703"
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };