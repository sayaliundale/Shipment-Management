import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';//getAuth is function from libaray firebase
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBmJAitQETxNg80iuntAKtbNFR0MgQQeok",
  authDomain: "shipment-management-6e3f7.firebaseapp.com",
  projectId: "shipment-management-6e3f7",
  storageBucket: "shipment-management-6e3f7.appspot.com",
  messagingSenderId: "772192718357",
  appId: "1:772192718357:web:dc44f9443a64ab77fbc81c",
  measurementId: "G-270JQRHK6S"
};

const app =  initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth,db};