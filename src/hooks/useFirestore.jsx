
import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';
import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const useFirestore = (collectionRef) => {
  const [docs, setDocs] = useState([]);
const getImages = async () => {
    const unsub = await getDocs(collectionRef);
    console.log(unsub.docs)
    setDocs(unsub.docs.map((doc) => ({...doc.data(), id: doc.id})))
      
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  
  return { docs };
}
}
export default useFirestore
