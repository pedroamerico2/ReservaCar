import React from "react";
import { Table } from "react-bootstrap";

export default function TableCars(props) {
  const { allCars } = props;
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Cor</th>
            <th>Setor</th>
          </tr>
        </thead>
        <tbody>
          {allCars.map((a, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{a.brand}</td>
              <td>{a.model}</td>
              <td>{a.color}</td>
              <td>
                {a.sector ? (
                  <i className="material-icons">done</i>
                ) : (
                  <i className="material-icons">highlight_off</i>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
