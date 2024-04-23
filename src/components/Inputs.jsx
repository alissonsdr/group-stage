import React, { useState } from 'react'

const Inputs = ({ type}) => {

    const [value, setValue] = useState("")

    const handleChange = (e) => {
        const inputValue = e.target.value
        
        if (inputValue.length <=2) {
            setValue(inputValue)
        }
    }


    return (
        <div>
            <input 
            type={type}
            value={value}
            onChange={handleChange} />
        </div>
    )
}

export default Inputs