import React from 'react';
import { motion } from 'framer-motion';
import { projectFirestore, projectStorage } from '../firebase/firebase-config';
import useFirestore from '../hooks/useFirestore';
import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const ImageGrid = ({ setSelectedImg }) => {
    const collectionRef = collection(projectFirestore, 'images');
 
    const { docs } = useFirestore(collectionRef);
    console.log(docs)
    return ( 
        <div className="img-grid">
            
        {docs && docs.map(doc => (
          <motion.div className="img-wrap" key={doc.id} 
            layout
            whileHover={{ opacity: 1 }}s
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img src={doc.url} alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
      </div>
     );
}
 
export default ImageGrid