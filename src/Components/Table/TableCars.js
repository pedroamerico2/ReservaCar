import React from "react";
import { Table, Button } from "react-bootstrap";

export default function TableCars(props) {
  const { allCars, searchCarOnListToRemove } = props;
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th width="5%">
              <i className="material-icons">radio_button_unchecked</i>
            </th>
            <th width="5%">#</th>
            <th width="5%">Status</th>
            <th width="15%">Marca</th>
            <th width="20%">Modelo</th>
            <th width="10%">Cor</th>
            <th width="10%">Placa</th>
            <th width="10%">Setor</th>
            <th width="20%">Acao</th>
          </tr>
        </thead>
        <tbody>
          {allCars.map((a, index) => (
            <tr>
              <td width="5%">
                <i className="material-icons">radio_button_unchecked</i>
              </td>
              <td width="5%">{index + 1}</td>
              <td width="5%">
                {a.maintenance === true ? (
                  <i className="material-icons">car_repair</i>
                ) : a.wash === true ? (
                  <i className="material-icons">local_car_wash</i>
                ) : (
                  <i className="material-icons">directions_car</i>
                )}
              </td>
              <td width="15%">{a.brand}</td>
              <td width="20%">{a.model}</td>
              <td width="10%">{a.color}</td>
              <td width="10%">{a.licencePlate}</td>
              <td width="10%">
                {a.sector ? (
                  <i className="material-icons">done</i>
                ) : (
                  <i className="material-icons">highlight_off</i>
                )}
              </td>
              <td width="20%">
                <Button
                  onClick={() => searchCarOnListToRemove(a.id)}
                  className="mx-1"
                  variant="danger"
                >
                  <i className="material-icons">delete</i>
                </Button>
                <Button className="mx-1" variant="warning">
                  <i className="material-icons">mode</i>
                </Button>
                <Button className="mx-1" variant="info">
                  <i className="material-icons">preview</i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
