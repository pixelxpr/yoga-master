import React, { useState, useEffect } from 'react'
import ReactModal from 'react-modal';

import styles from '../styles/Modal.module.css'

const Modal = (props) => {
  const [showModal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
    console.log('pppppp');
  }

  const handleCloseModal = () => {
    setModal(false);
  }

  return (
    <>
      {React.cloneElement(props.triggerEle(), { onClick: () => { handleOpenModal() } })}
      <ReactModal
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
      >
        {props.children}
        <div className="ReactModal__Close" onClick={handleCloseModal}><i className="fa fa-window-close" aria-hidden="true"></i></div>
      </ReactModal>
    </>
  )
}

export default Modal;