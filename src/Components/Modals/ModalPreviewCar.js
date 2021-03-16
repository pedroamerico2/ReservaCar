import React from "react";
import { Modal, Button, Card } from "react-bootstrap";

export default function ModalPreviewCar(props) {
  const { showModalPreviewCar, setShowModalPreviewCar } = props;

  function handleClose() {
    setShowModalPreviewCar(false);
  }

  return (
    <Modal
      show={showModalPreviewCar}
      onHide={() => handleClose()}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Preview carro: {showModalPreviewCar.licencePlate}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card
          className="mx-auto"
          style={{
            marginBottom: "3%",
            width: "18rem",
            backgroundColor: "",
          }}
        >
          <Card.Title className="text-center">
            {showModalPreviewCar.model}
          </Card.Title>
          <Card.Img
            style={{ width: "286px", height: "180px", borderRadius: "50%" }}
            variant="top"
            src={showModalPreviewCar.carImg}
          />
          <Card.Body>
            <Card.Text>
              <b>Cor </b>{" "}
              <p className="text-center">{showModalPreviewCar.color}</p>
              <b>Setor </b>{" "}
              <p className="text-center">
                {showModalPreviewCar.sector === true ? "sim" : "nao"}
              </p>
              <b>Placa: </b>
              <p className="text-center">{showModalPreviewCar.licencePlate}</p>
            </Card.Text>
            <Button variant="success" style={{ width: "100%" }} disabled>
              Reservar
            </Button>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
