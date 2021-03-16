import React, { useEffect, useState } from "react";
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
    maintenance1,
    reserve1,
    setReserve,
    wash1,
    carImg1,
    setCarImg,
    setMaintenance,
    setWash,
    setChangeDb,
    changeDb,
  } = props;

  function handleClose() {
    setShowModalAddCar(false);
  }
  function handleAdd() {
    var newCar = {
      brand: brand1,
      color: color1,
      licencePlate: licencePlate1,
      maintenance: maintenance1,
      model: model1,
      sector: sector1,
      wash: wash1,
      reserve: reserve1,
      carImg: carImg1,
    };
    addCar(newCar);
    setChangeDb(!changeDb);
    setShowModalAddCar(false);
  }
  useEffect(() => {
    setBrand("");
    setColor("");
    setLicencePlate("");
    setCarImg("");
    setModel("");
    setSector(false);
    setReserve(true);
    setMaintenance(false);
    setWash(false);
  }, [showModalAddCar]);
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
          <Form.Group>
            <Form.Label>Imagem</Form.Label>
            <Form.Control
              type="text"
              placeholder="https://imigur.com/1231312"
              value={carImg1}
              onChange={(e) => setCarImg(e.target.value)}
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
            {reserve1 === true ? (
              <i
                className="material-icons"
                style={{ cursor: "pointer" }}
                onClick={() => setReserve(!reserve1)}
              >
                check_box
              </i>
            ) : (
              <i
                className="material-icons"
                style={{ cursor: "pointer" }}
                onClick={() => setReserve(!reserve1)}
              >
                check_box_outline_blank
              </i>
            )}{" "}
            <Form.Label>Disponibilidade para Reserva</Form.Label>
          </Form.Group>
          <Form.Group>
            {sector1 === true ? (
              <i
                className="material-icons"
                style={{ cursor: "pointer" }}
                onClick={() => setSector(!sector1)}
              >
                check_box
              </i>
            ) : (
              <i
                className="material-icons"
                style={{ cursor: "pointer" }}
                onClick={() => setSector(!sector1)}
              >
                check_box_outline_blank
              </i>
            )}{" "}
            <Form.Label>Prioridade para Setor</Form.Label>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => handleClose()}>Close</Button>
        <Button variant="success" onClick={() => handleAdd()}>
          Adicionar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
