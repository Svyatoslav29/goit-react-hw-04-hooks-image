
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

function Modal ({ modalImage, tags, onToggleModal}) {
   useEffect(() => {
     window.addEventListener("keydown", handleKeyDown);
     return () => {
       window.removeEventListener("keydown", handleKeyDown);
     }
   })


const handleKeyDown = (e) => {
  if (e.code === "Escape") {
    onToggleModal();
  }
};

const handleBackdropClick = (e) => {
  if (e.currentTarget === e.target) {
    onToggleModal();
  }
};

return createPortal(
  <div className={s.Orerlay} onClick={handleBackdropClick}>
    <div className={s.Modal}>
      <img src={modalImage} alt={tags}/>
    </div>
  </div>,
   modalRoot
);
}

Modal.PropTypes = {
  onToggleModal: PropTypes.func,
  modalImage: PropTypes.string,
  tags: PropTypes.string,
};

export default Modal;