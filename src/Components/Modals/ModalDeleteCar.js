import React, { useState } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";

import { deleteCar } from "../../Controllers/Cars";

export default function ModalDeleteCar(props) {
  const { setShowModalDeleteCar, showModalDeleteCar } = props;

  function handleClose() {
    setShowModalDeleteCar(false);
  }
  function handleDelete() {
    deleteCar(showModalDeleteCar.id, showModalDeleteCar.licencePlate);
    setShowModalDeleteCar(false);
  }

  return (
    <Modal
      show={showModalDeleteCar}
      onHide={() => handleClose()}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-center">
          <div
            class="icon-box"
            style={{
              width: "80px",
              height: "80px",
              margin: "0 auto",
              marginBottom: "20px",
              borderRadius: "50%",
              zIndex: "9",
              textAlign: "center",
              border: "3px solid #f15e5e",
            }}
          >
            <i
              style={{
                color: "#f15e5e",
                fontSize: "46px",

                display: "inline-block",
                marginTop: "13px",
              }}
              className="material-icons"
            >
              &#xE5CD;
            </i>
          </div>
          <p>
            Tem certeza que deseja Deletar o veiculo:{" "}
            {showModalDeleteCar.licencePlate}
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Close
        </Button>
        <Button variant="danger" onClick={() => handleDelete()}>
          Deletar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
