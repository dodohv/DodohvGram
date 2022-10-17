import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [myFile, setMyFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    e.preventDefault()
    if(e.target.files[0]){
        var selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
        
            setMyFile(selected);
          setError('');
        } else {
          setMyFile(null);
          setError('Please select an image file (png or jpg)');
        }
    }
    
  };

  return (
    <form>
      <label className='s' >
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { myFile && <div>{ myFile.name }</div> }
        { myFile && <ProgressBar myFile={myFile} setMyFile={setMyFile} /> }
    
      </div>
    </form>
  );
}

export default UploadForm;


// import React, { useState } from "react";
// import ProgressBar from "./ProgressBar";
// const UploadForm = () => {
//     const [file, setFile] = useState(null);
//     const [error, setError] = useState(null);
//     const types = ['image/png', 'image/jpeg'];  
//     //    const types = ['image/png', 'image/jpeg', 'image/gif', 'image/ico', 'image/svg+xml', 'image/svg+xml+xml+xml'];
//     const changeHandler = (e) => {
        
//         console.log("uma vez deu ChangeHandler")
//        // setFile(e.target.files[0])
//        // let selected = e.target.files[0];
//        // console.log("1", selected);
//        // setFile(selected);
//         /* if (selected && types.includes(selected.type)) {
//             setFile(selected);
            
//             setError('')
//         } else {
//             setFile(null);
//             setError('Favor selecionar uma image tipo png ou jpeg');

//         } */
//        //setFile(e.target.files[0])
//        //            <input type="file" onChange={changeHandler} />

//     }
//     console.log("Seto File 1",file);

//     return (
//         <form>
//             <label>

            
//             <input type="file" filename={file} onChange={(e) => setFile(e.target.files[0]) } />
//             <span>+</span>
//             </label>
//            {/*  <div className="output">
//                 {error && <div className="error">{error}</div>}
//                  {file && <div className="file">{file.name}</div>}
//                 {file && <ProgressBar file={file}  />}
//             </div> */}
//         </form>
//       );
// }
 
// export default UploadForm;