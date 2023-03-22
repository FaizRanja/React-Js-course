import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light')
const[alert, setAlert] = useState(null)

const showAlert = (message, type) => {
setAlert({
  msg: message,
  type: type
})
setTimeout(() => {
  setAlert(null)
} , 1500);
}
const tougleMode = () => {
    if  ( mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0ef'
      showAlert("Dark Mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = '#fff'
      showAlert("Light Mode has been enabled", "success")

    }
 }

  
  return (
   
   <>
   
<Navbar tittle= 'TextUtalits' AboutText="About Here" mode={mode} tougleMode={tougleMode} />
<Alert Alert={alert}/>



        { <div className="container my-3" >
<TextArea showAlert={showAlert} heading="Enter Your Text"/></div> }
{/* <About/> */}

   </>
  );
}

export default App;
