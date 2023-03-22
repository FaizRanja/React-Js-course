import React,{useState} from 'react'
export default function TextArea(props) {

    const handleonchange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }
const handleupcase = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Convert to UpperCase!" , "success")
}

const handlelowcasr = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Convert to LowerCase!" , "success")
}
const handletodelete = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = ''
        setText(newText)
        props.showAlert("This text has been Deleted!" , "success")
}
const recoverdata = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = 'Enter Your Text Here'
        setText(newText)
        props.showAlert("This Text has been Recoverd!" , "success")
}

const handlecopy = () => {
        // console.log("Uppercase was clicked" + text)
        let text = document.getElementById("mb-3")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("This text has been Copied" , "success")
}

const handleSpacing = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("All the Extra Spacies Are Removed!" , "success")
}

    const [text, setText] = useState("Enter Your Text Here")
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text}  onChange={handleonchange} style={{ backgroundColor:
   props.mode==='light' ? 'gray':'white',color :props.mode==='dark' ? 'White':'black' }} 
  id="mb-3" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleupcase}> Conver to upper case</button>
<button className="btn btn-primary hello" onClick={handlelowcasr}>Conver to Lower case </button>
<button className='btn btn-primary' onClick={handletodelete} >Delete to all Text</button>
<button className='btn btn-primary hello' onClick={recoverdata} >Recover to Delete Data</button>
<button className='btn btn-primary hello' onClick={handlecopy} >Copy Text</button>
<button className='btn btn-primary hello' onClick={handleSpacing} >Extra Spacing</button>
    </div>
    <div className="containe my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {0.001*text.split(" ").length}  Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>

    </>
  )
}
