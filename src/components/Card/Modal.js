import React from "react";
import "./Modal.css";
import data from "../Database/ModalDB";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Modal Başlık</h2>
        <p>Modal içeriği burada yer alır.</p>
        <button onClick={onClose}>Kapat</button>
      </div>
    </div>
  );
};

export default Modal;
