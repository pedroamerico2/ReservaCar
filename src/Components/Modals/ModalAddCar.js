import React, { useState } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";

import { addCar } from "../../Controllers/Cars";

export default function ModalAddCar(props) {
  const {
    brand1,
    setBrand,
    color1,
    setColor,
    licencePlate1,
    setLicencePlate,
    model1,
    setModel,
    sector1,
    setSector,
    showModalAddCar,
    setShowModalAddCar,
    addCarOnDB,
    setAddCarOnDB,
    allCars,
  } = props;

  function handleClose() {
    setShowModalAddCar(false);
  }
  function handleAdd() {
    var newCar = {
      brand: brand1,
      color: color1,
      licencePlate: licencePlate1,
      model: model1,
      sector: sector1,
    };
    setAddCarOnDB([...allCars, newCar]);
    addCar(newCar);
    setShowModalAddCar(false);
  }
  return (
    <Modal
      show={showModalAddCar}
      onHide={() => handleClose()}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Adicionar um Carro
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Marca</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fiat"
                value={brand1}
                onChange={(e) => setBrand(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Cor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Branco"
                value={color1}
                onChange={(e) => setColor(e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Label>Placa</Form.Label>
            <Form.Control
              type="text"
              placeholder="XXXXXXX"
              value={licencePlate1}
              onChange={(e) => setLicencePlate(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Modelo</Form.Label>
            <Form.Control
              placeholder="Argo"
              value={model1}
              onChange={(e) => setModel(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Setor</Form.Label>
            <Form.Control
              type="checkbox"
              value={sector1}
              onClick={() => setSector(!sector1)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => handleClose()}>Close</Button>
        <Button
          variant="success"
          onClick={() =>
            handleAdd(brand1, color1, licencePlate1, model1, sector1)
          }
        >
          Adicionar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
