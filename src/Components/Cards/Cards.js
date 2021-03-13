import React from "react";
import { Card, Button, Row, ListGroup, ListGroupItem } from "react-bootstrap";
import {} from "react-router-dom";

export default function Cards(props) {
  const { allCars } = props;
  return (
    <>
      <Row className="my-3 mb-2">
        {allCars.map((a, index) => (
          <Card
            className="mx-auto"
            style={{ marginBottom: "3%", width: "18rem", backgroundColor: "" }}
          >
            <Card.Img
              style={{ width: "286px", height: "180px" }}
              variant="top"
              src=""
            />
            <Card.Body>
              <Card.Title>{a.brand}</Card.Title>
              <Card.Text>
                <b>Cor: </b> <p>{a.color}</p>
                <b>Petence a um setor: </b>{" "}
                <p>{a.sector === true ? "sim" : "nao"}</p>
                <b>Placa: </b>
                <p>{a.licencePlate}</p>
              </Card.Text>
              <Button variant="primary" style={{ width: "100%" }}>
                Reservar
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </>
  );
}
