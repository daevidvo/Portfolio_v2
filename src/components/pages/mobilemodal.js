import React from "react";

export default function MobileModal({setCurrentPage}) {
    return (
        <div className="modal modal-animated--dropdown" id="mobilemodal">
        <button href="/" className="modal-overlay close-btn" aria-label="Close" onClick={() => window.history.back()}>x</button>
        <div className="modal-content" style={{minWidth: `10vw`}}>
            <div className="modal-body">
                <div className="my-1 u-flex u-flex-column">
                    <button className="btn-link outline m-1" onClick={() => {setCurrentPage("home"); window.history.back()}}>Home</button>
                    <button className="btn-link outline m-1" onClick={() => {setCurrentPage("projects"); window.history.back()}}>Projects</button>
                    <button className="btn-link outline m-1" onClick={() => {setCurrentPage("contact"); window.history.back()}}>Contact</button>
                </div>
            </div>
        </div>
    </div>
    )
}