import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div align="right">
            <div className="toast align-items-center text-success-emphasis bg-success border-0 show" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="d-flex">
                    <div className="toast-body">
                        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alert
