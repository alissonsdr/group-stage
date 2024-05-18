import React from 'react'
import './Modal.css';

const Modal = ({isOpen, children}) => {
  
    if (!isOpen) return null

  return (
    <div className='modal-overlay'>
        <div className="modal-content">
            <h1 className='children'>{children}</h1>
        </div>
    </div>
  )
}

export default Modal