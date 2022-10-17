import { useState, useEffect} from 'react'
import { projectFirestore, projectStorage } from '../firebase/firebase-config';
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid';
const useStorage = (myFile) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    //         const storageRef = ref(projectStorage, `images/${myFile.name + v4()} `);
    useEffect(() => {
        
         const storageRef = ref(projectStorage, `images/${myFile.name} `);
        
        const uploadTask = uploadBytesResumable(storageRef,myFile);
        uploadTask.on("state_changed", (snapshot) => {
            const prog = Math.round((snapshot.bytesTransferred /snapshot.totalBytes) * 100
            );
            setProgress(prog);
        },
        (err) => console.log(err),
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => setUrl(url));
            
        }       
        ) 
        // uploadBytes(storageRef, myFile).then(() => {
        //     alert("Enviado para Firebase Storage!")
        // })
        
        console.log("fim useEffect")
     }, [myFile])
    

    return { progress, url, error }
}
 
export default useStorage;