import React from 'react'

const PrevNext = ({ onNextSelect, onPrevSelect }) => {
    return (
        <div className="right-container__buttons">
            <div className="left-button" onClick={onPrevSelect}>Prev</div>
            <div className="right-button" onClick={onNextSelect}>Next</div>
        </div>
    )
}

export default PrevNext;