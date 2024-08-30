import React, { useState } from 'react';
import './Modal.css';

function ModalComponent() {
    const [isOpen, setIsOpen] = useState();

    return (
        <div>
            <button onClick={() => setIsOpen(true)}> Open Modal</button>
            {isOpen && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={() => setIsOpen(false)}></span>
                        <h2>Modal Title</h2>
                        <p>This is the modal body content</p>
                        <button onClick={() => setIsOpen(false)}> Close Modal</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ModalComponent;