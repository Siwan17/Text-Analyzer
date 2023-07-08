import React, {useState} from 'react'


export default function TextFrom(props) {
    const handleUpClick = () =>{
       // console.log("UpperCase was clicled")
       // setText("You Have clicke setText")
        let newText = text.toUpperCase();
        setText(newText)
        props.aletMethod("Converted to upper case" ,"success");
    }
    const handleLpClick = () =>{
     let nText= text.toLowerCase();
        setText(nText)
        props.aletMethod("Converted to Lower case" ,"success");
    }

    const handleClearText = () =>{
      let nText= '';
         setText(nText)
         props.aletMethod("Text is clear now","success");
     }

     const handleCopy = () =>{
      var text= document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value)
      props.aletMethod("Text is copied Now","success");
         
     }
 
    //  const handleExtSpaces= () =>{
    //   let nText= text.split(/[ ]+/);
    //   setText= (nText.join(" "))
    //  }
    
    

    const handleOnChange = (event)=>{
   // console.log("handelOnChange was clicled")
    setText(event.target.value)
    }
    const[text, setText] = useState('');

  return (
<>
<div className= "container mx-2"style={{color: props.mode=== 'dark'?'white':'#042743'}} >
     <h1>{props.heading} </h1>
     <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} id="myBox" rows="7" ></textarea>
     </div>  

     <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button> 
     <button className="btn btn-primary mx-2 my-2" onClick={handleLpClick}>Convert to Lower</button> 
     <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button> 
     <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}>ClearText</button> 
</div>

<div className="container my-3" style={{color: props.mode=== 'dark'?'white':'#042743'}}>
<h2>Text Summery</h2>
<p> {text.split("/\S+/").filter((element)=>{return element.length !== 0}).length} Words and {text.length} charecters </p> 
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length*0.008} Minutes to read </p>
<h3>Preview</h3>
<p>{text.length>0?text:"Enter something in Text Box to priview here" }</p>
 </div>
</>
    
  )
}
