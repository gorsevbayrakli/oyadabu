import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDj1oavKcU9jbi_LxE_rp44kx4gRmNY-ik",
  authDomain: "oyadabu-42957.firebaseapp.com",
  projectId: "oyadabu-42957",
  storageBucket: "oyadabu-42957.firebasestorage.app",
  messagingSenderId: "346857454231",
  appId: "1:346857454231:web:58819557f334b7a62387d2",
  measurementId: "G-DCR8FYY8TN",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
