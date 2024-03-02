import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
       // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to Uppercase ", ' Success ');
    }

    const handleDownClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to Lowercase ", ' Success ');
    }
    const handleClear=()=>{
        let newText = "";
        setText(newText);
        props.showAlert(" Text Cleared ", ' Success ');
    }
    const handleOnChange = (event)=>{
      //  console.log("On Change");
        setText(event.target.value)
    }

    const[text,setText]= useState('This is Text');
  return (
    <>
    <div className="container" style ={{color : props.mode ==='dark'?'white':'#042743'}}> 
        <div className="h1">{props.heading}</div>
     <div className="mb-3">
      
      <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor : props.mode ==='dark'?'grey':'white' , color : props.mode ==='dark'?'white':'#042743'}}  id="myBox" rows="8"></textarea>
     </div>
     <button className="btn btn-primary mx-1" onClick={handleUpClick}>Covert to Uppercase</button>
     <button className="btn btn-primary mx-1" onClick={handleDownClick}>Covert to Lowercase</button>
     <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
    </div>

    <div className="container my-3" style ={{color : props.mode ==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s/).filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.0008 * text.split(" ").length } will be the time in minutes required to read the given Text . </p>
        <h3 >Preview</h3>
        <p>{text.length>0?text : "Enter Something in the above box to preview it here ..."}</p>

    </div>
    </>
  )
}
