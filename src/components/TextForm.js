import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        // console.log("on Change")
        setText(event.target.value)
    }

    const uppercaseClick = () => {
        setText(text.toUpperCase())
    }

    const lowercaseClick = () => {
        setText(text.toLowerCase())
    }

    const camelcaseClick = () => {
        // console.log("camelcaseClick " + text);
        let t = text.replace(/\s+(.)/g, function (match, group) {
            return group.toUpperCase()
        });
        // console.log("converted camelcaseClick " + t);
        setText(t)
    }

    const clearTextClick = () => {
        setText("")
    }

    const copyTextClick = () => {
        navigator.clipboard.writeText(text);
    }

    const removeExtraSpacesClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState('Enter Text here');
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <textarea className="form-control" value={text} onChange={handleOnChange} onClick={clearTextClick} id="myBox" rows="10"></textarea> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={uppercaseClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-1' onClick={lowercaseClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-1' onClick={camelcaseClick}>Convert to Camelcase</button>
                <button className='btn btn-primary mx-1' onClick={copyTextClick}>Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={removeExtraSpacesClick}>Remove Extra Spaces</button>
                <button className='btn btn-danger mx-1' onClick={clearTextClick}>Clear Text</button>

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
