import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";

import { editCar } from "../../Controllers/Cars";

export default function ModalEditCar(props) {
  const {
    showModalEditCar,
    setShowModalEditCar,
    changeDb,
    setChangeDb,
  } = props;

  const [brand, setBrand1] = useState("");
  const [model, setModel1] = useState("");
  const [color, setColor1] = useState("");
  const [licencePlate, setLicencePlate1] = useState("");
  const [sector, setSector1] = useState(false);
  const [maintenance, setMaintenance1] = useState(false);
  const [reserve, setReserve1] = useState(true);
  const [wash, setWash1] = useState(false);
  const [carImg, setCarImg1] = useState("");

  function handleClose() {
    setShowModalEditCar(false);
  }
  function handleEdit() {
    var editedCar = {
      brand: brand,
      color: color,
      licencePlate: licencePlate,
      maintenance: maintenance,
      model: model,
      sector: sector,
      wash: wash,
      reserve: reserve,
      carImg: carImg,
    };
    editCar(editedCar, showModalEditCar.id);
    setChangeDb(!changeDb);
    setShowModalEditCar(false);
  }
  useEffect(() => {
    setBrand1(showModalEditCar.brand);
    setModel1(showModalEditCar.model);
    setColor1(showModalEditCar.color);
    setLicencePlate1(showModalEditCar.licencePlate);
    setSector1(showModalEditCar.sector);
    setMaintenance1(showModalEditCar.maintenance);
    setReserve1(showModalEditCar.reserve);
    setWash1(showModalEditCar.wash);
    setCarImg1(showModalEditCar.carImg);
  }, [showModalEditCar]);
  return (
    <Modal
      show={showModalEditCar}
      onHide={() => handleClose()}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editar carro: {licencePlate}
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
                value={brand}
                disabled
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Cor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Branco"
                value={color}
                onChange={(e) => setColor1(e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Label>Placa</Form.Label>
            <Form.Control
              type="text"
              placeholder="XXXXXXX"
              value={licencePlate}
              disabled
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Imagem</Form.Label>
            <Form.Control
              type="text"
              placeholder="https://imigur.com/1231312"
              value={carImg}
              onChange={(e) => setCarImg1(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formGridAddress2">
            <Form.Label>Modelo</Form.Label>
            <Form.Control placeholder="Argo" value={model} disabled />
          </Form.Group>
          <Form.Group>
            {reserve === true ? (
              <i
                className="material-icons"
                style={{ cursor: "pointer" }}
                onClick={() => setReserve1(!reserve)}
              >
                check_box
              </i>
            ) : (
              <i
                className="material-icons"
                style={{ cursor: "pointer" }}
                onClick={() => setReserve1(!reserve)}
              >
                check_box_outline_blank
              </i>
            )}{" "}
            <Form.Label>Disponibilidade para Reserva</Form.Label>
          </Form.Group>
          <Form.Group>
            {sector === true ? (
              <i
                className="material-icons"
                style={{ cursor: "pointer" }}
                onClick={() => setSector1(!sector)}
              >
                check_box
              </i>
            ) : (
              <i
                className="material-icons"
                style={{ cursor: "pointer" }}
                onClick={() => setSector1(!sector)}
              >
                check_box_outline_blank
              </i>
            )}{" "}
            <Form.Label>Prioridade para Setor</Form.Label>
          </Form.Group>
          <Form.Group>
            {wash === true ? (
              <i
                className="material-icons"
                style={{ cursor: "pointer" }}
                onClick={() => setWash1(!wash)}
              >
                check_box
              </i>
            ) : (
              <i
                className="material-icons"
                style={{ cursor: "pointer" }}
                onClick={() => setWash1(!wash)}
              >
                check_box_outline_blank
              </i>
            )}{" "}
            <Form.Label>Lavagem</Form.Label>
          </Form.Group>
          <Form.Group>
            {maintenance === true ? (
              <i
                className="material-icons"
                style={{ cursor: "pointer" }}
                onClick={() => setMaintenance1(!maintenance)}
              >
                check_box
              </i>
            ) : (
              <i
                className="material-icons"
                style={{ cursor: "pointer" }}
                onClick={() => setMaintenance1(!maintenance)}
              >
                check_box_outline_blank
              </i>
            )}{" "}
            <Form.Label>Manutenção</Form.Label>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Close
        </Button>
        <Button variant="success" onClick={() => handleEdit()}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
