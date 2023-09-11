import React from 'react'

export default function About(props) {
    let buttonStyle = {
        backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black',
        border: props.mode === 'dark' ? '0.5px solid white' : '0.5px solid black'
    }
    let itemStyle = {
        backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black',
        border: props.mode === 'dark' ? '0.5px solid white' : '0.5px solid black'
    }
    return (
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={itemStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={buttonStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={itemStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed"style={buttonStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={itemStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={buttonStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
