import React, { useState } from 'react'

const Inputs = ({ type, value, onChange }) => {


    return (
        <div>
            <input 
            // type={type}
            value={value}
            onChange={onChange}/>
        </div>
    )
}

export default Inputs