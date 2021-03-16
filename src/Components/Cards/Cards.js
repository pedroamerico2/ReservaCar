import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import {} from "react-router-dom";

export default function Cards(props) {
  const { allCars } = props;
  return (
    <>
      <h1 className="text-center">Carros Disponiveis</h1>
      <Row className="my-3 mb-2">
        {allCars
          .filter(
            (b) => (b.reserve === false) - 1 || b.maintenance === true - 1
          )
          .filter((b) => (b.wash === true) - 1)
          .map((a, index) => (
            <Card
              className="mx-auto"
              style={{
                marginBottom: "3%",
                width: "18rem",
                backgroundColor: "",
              }}
            >
              <Card.Title className="text-center">{a.model}</Card.Title>
              <Card.Img
                style={{ width: "286px", height: "180px", borderRadius: "50%" }}
                variant="top"
                src={a.carImg}
              />
              <Card.Body>
                <Card.Text>
                  <b>Cor </b> <p className="text-center">{a.color}</p>
                  <b>Setor </b>{" "}
                  <p className="text-center">
                    {a.sector === true ? "sim" : "nao"}
                  </p>
                  <b>Placa: </b>
                  <p className="text-center">{a.licencePlate}</p>
                </Card.Text>
                <Button variant="success" style={{ width: "100%" }}>
                  Reservar
                </Button>
              </Card.Body>
            </Card>
          ))}
      </Row>
    </>
  );
}
