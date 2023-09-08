import React, { useState } from 'react'

export default function TextForm(props) {
    const uppercaseClick = () => {
        setText(text.toUpperCase())
    }
    const lowercaseClick = () => {
        setText(text.toLowerCase())
    }
    const camelcaseClick = () => {
        console.log("camelcaseClick " + text);
        let t = camelize(text);
        console.log("converted camelcaseClick " + t);
        setText(t)
    }
    const handleOnChange = (event) => {
        // console.log("on Change")
        setText(event.target.value)
    }

    const handleOnClick = () => {
        // console.log("on click")
        setText("")
    }

    function camelize(str) {
        return str.replace(/\s+(.)/g, function (match, group) { 
          return group.toUpperCase()  
        });
    }

    const [text, setText] = useState('Enter Text here');
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} onClick={handleOnClick} id="myBox" rows="10"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={uppercaseClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={lowercaseClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={camelcaseClick}>Convert to Camelcase</button>
            </div>
            <div className="container my-3">
                <h2>Your text summery:</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview:</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
