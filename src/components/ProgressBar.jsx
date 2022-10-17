
import React, { useState, useEffect} from 'react'
import { projectFirestore, projectStorage } from '../firebase/firebase-config';
import useStorage from "../hooks/useStorage";
import { v4 } from 'uuid';
import {collection, addDoc} from 'firebase/firestore'
const ProgressBar = ({myFile, setMyFile}) => {
    console.log(myFile,"uma vez")
    const collectionRef = collection(projectFirestore, 'images');
    console.log(`images/${myFile.name + v4()} `)
        const {url, progress} = useStorage(myFile);
        useEffect( () => {
            if (url != null) {
            addDoc(collectionRef,{url: url, createAt: Date.now()})
        }
        }, [url])
        useEffect(() => {
            if (url) {
                setMyFile(null);
            }
          }, [url, setMyFile]);
        
 
    return (  
        <div className="progress-bar">
            Carregando {progress} %
            Link da Foto : <a href={url} >{myFile.name}</a>

            <img src={url}/>
        </div>
    );
}
 
export default ProgressBar;
