import React from 'react';


const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // No renderiza el modal si isOpen es false

  return (
    <div className="modal-overlay-2" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
