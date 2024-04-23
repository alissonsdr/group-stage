import React from 'react'
import './Buttons.css'

const Buttons = ({ text, func }) => {

    const handleFunction = () => {

        func == 'clear' ? (
            console.log("clear")
        ) : (
            console.log("save")
        )
        
    }
    


    return (
        <div>
            <button
                className='button'
                onClick={handleFunction}
            >{text}</button>
        </div>

    )
}

export default Buttons