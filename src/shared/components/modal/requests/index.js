import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import RequestCard from "../../common/requestCard";

function Request({ openModal, HideModal, pending }) {
  const user = useSelector((state) => state.root.user);

  return (
    <>
      <Modal
        size="lg"
        backdrop="static"
        show={openModal}
        onHide={HideModal}
        centered
      >
        <button
          type="button"
          className="close custom-modal-close"
          onClick={HideModal}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="login-modal-body">
          <p className="login-heading pb-1">Friend Requests</p>
          <div className="col">
            {pending?.map((item, index) => {
              return (
                <RequestCard id={item} key={index} HideModal={HideModal} />
              );
            })}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Request;
