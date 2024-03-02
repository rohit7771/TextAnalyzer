import './App.css';
import React , {useState} from 'react'
import NavBar from './components/NavBar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'


function App() {
  const [mode , setMode]= useState('light');
  const [alert , setAlert]= useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>
    {
      setAlert(null);
    },1500);

  }

  const toggleMode =()=>{
    if(mode === 'light')
    {
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark Mode Enabled ",' Success ');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode Enabled ",' Success ');

    }
  }
  return (
   <>
   
  
   <NavBar title = "TextAnalyzer"  mode={mode} toggleMode = {toggleMode} />
   <Alert alert={alert}/>
   <div className="container my-3">
    <TextForm showAlert = {showAlert} heading= "Enter Text to analyze " mode={mode}/>
   </div>
   </>
  );
}

export default App;
