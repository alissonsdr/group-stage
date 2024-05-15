import React from 'react'
import './Buttons.css'

const Buttons = ({ text, onClick }) => {

    return (
        <div>
            <button
                className='button'
                onClick={onClick}
            >{text}</button>
        </div>

    )
}

export default Buttons