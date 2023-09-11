import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        // console.log("on Change")
        setText(event.target.value)
    }

    const uppercaseClick = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted to upper case!", "success")
    }

    const lowercaseClick = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to lower case!", "success")
    }

    const camelcaseClick = () => {
        // console.log("camelcaseClick " + text);
        let t = text.replace(/\s+(.)/g, function (match, group) {
            return group.toUpperCase()
        });
        // console.log("converted camelcaseClick " + t);
        setText(t)
        props.showAlert("Converted to camel case!", "success")
    }

    const clearTextClick = () => {
        setText("")
        props.showAlert("Cleared text!", "success")
    }

    const copyTextClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied Text!", "success")
    }

    const removeExtraSpacesClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces from text!", "success")
    }

    const [text, setText] = useState('');
    let wordLength = text.split(/\s+/).filter((element) =>{return element.length !== 0}).length;
    let isbuttonDisbale = (wordLength===0);
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <textarea className="form-control" value={text} onChange={handleOnChange} onClick={clearTextClick} id="myBox" rows="10"></textarea> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="10"></textarea>
                </div>
                <button disabled={isbuttonDisbale} className='btn btn-primary mx-1 my-1' onClick={uppercaseClick}>Convert to Uppercase</button>
                <button disabled={isbuttonDisbale} className='btn btn-primary mx-1 my-1' onClick={lowercaseClick}>Convert to Lowercase</button>
                <button disabled={isbuttonDisbale} className='btn btn-primary mx-1 my-1' onClick={camelcaseClick}>Convert to Camelcase</button>
                <button disabled={isbuttonDisbale} className='btn btn-primary mx-1 my-1' onClick={removeExtraSpacesClick}>Remove Extra Spaces</button>
                <button disabled={isbuttonDisbale} className='btn btn-primary mx-1 my-1' onClick={copyTextClick}>Copy Text</button>
                <button disabled={isbuttonDisbale} className='btn btn-danger mx-1 my-1' onClick={clearTextClick}>Clear Text</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summery:</h2>
                 
                <p>{wordLength} words and {text.length} characters</p>
                <p>{0.008 * wordLength} Minutes to read</p>
                <h2>Preview:</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
