import { initializeApp } from "firebase/app" 
import { getDatabase, ref, set, get, push, onValue } from "firebase/database" 
import { getStorage } from "firebase/storage" 

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig) 
const database = getDatabase(app) 

export { database, ref, set, get, push, onValue, getStorage }
