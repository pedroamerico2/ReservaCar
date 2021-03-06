import React from "react";
import { Table, Button } from "react-bootstrap";

export default function TableCars(props) {
  const {
    allCars,
    searchCarOnListToRemove,
    searchOnList,
    searchCarOnListToEdit,
    searchCarOnListToPreview,
  } = props;
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
          {allCars
            .filter(
              (b) =>
                b.licencePlate
                  .toUpperCase()
                  .indexOf(searchOnList.toUpperCase()) !== -1 ||
                b.brand.toUpperCase().indexOf(searchOnList.toUpperCase()) !==
                  -1 ||
                b.model.toUpperCase().indexOf(searchOnList.toUpperCase()) !== -1
            )
            .map((a, index) => (
              <tr>
                <td width="5%">
                  <i className="material-icons">radio_button_unchecked</i>
                </td>
                <td width="5%">{index + 1}</td>
                <td width="5%">
                  {a.maintenance === true ? (
                    <i className="material-icons" style={{ color: "red" }}>
                      car_repair
                    </i>
                  ) : a.wash === true ? (
                    <i className="material-icons" style={{ color: "blue" }}>
                      local_car_wash
                    </i>
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
                  <Button
                    onClick={() => searchCarOnListToEdit(a.id)}
                    className="mx-1"
                    variant="warning"
                  >
                    <i className="material-icons">mode</i>
                  </Button>
                  <Button
                    onClick={() => searchCarOnListToPreview(a.id)}
                    className="mx-1"
                    variant="info"
                  >
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
