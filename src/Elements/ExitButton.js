import React from 'react'
import "../Elements/CSS/exit.css"
function ExitButton({clikExit}) {
    return (
        <div className="Exit">
            <a onClick={clikExit}>
                <span className="Left">
                    <span className="CircleLeft"></span>
                    <span className="CircleRight"></span>
                </span>
                <span className="Right">
                    <span className="CircleLeft"></span>
                    <span className="CircleRight"></span>
                </span>
            </a>
        </div>
    )
}

export default ExitButton
