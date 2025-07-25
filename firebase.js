import { initializeApp } from "firebase/app";
import { 
  getFirestore, collection, addDoc, deleteDoc, doc, onSnapshot, query, orderBy, updateDoc 
} from "firebase/firestore";
import { 
  initializeAuth, getReactNativePersistence 
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyC0nS6HOzxu13G7X1A4fWcuSiqCwsu6s6E",
  authDomain: "todo1-f7e24.firebaseapp.com",
  projectId: "todo1-f7e24",
  storageBucket: "todo1-f7e24.firebasestorage.app",
  messagingSenderId: "712941979939",
  appId: "1:712941979939:web:d761ebc838911e496",
  measurementId: "G-ZYG27QNPWW"
};

const app = initializeApp(firebaseConfig);

// Use this for persistent Auth in React Native
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Firestore initialization remains unchanged
const db = getFirestore(app);

export { db, auth, collection, addDoc, deleteDoc, doc, onSnapshot, query, orderBy, updateDoc };
