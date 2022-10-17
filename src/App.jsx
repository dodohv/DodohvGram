import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Title from './components/Title'
import UploadForm from './components/UploadForm'
function App() {
  

  return (
    <div className="App" >
    <Title />
    <UploadForm />
    </div>
  )
}

export default App
