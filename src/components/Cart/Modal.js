import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
function ModalView({ openModal, closeModal, username }) {
  return (
    <div className="Modal">
      <Modal isOpen={openModal}>
        <i className="bi bi-check-circle-fill text-center d-block modalIcon"></i>
        <h2 className="text-center">
          Your order has been successfully registered : {username}
        </h2>
        <Link to="/" className="BackHome" onClick={closeModal}>
          Back Home
        </Link>
        <p
          className="text-center d-block modalIcon closemodal"
          onClick={closeModal}
        >
          &times;
        </p>
      </Modal>
    </div>
  );
}

export default ModalView;
