import React, { useEffect, useState } from "react";
import {} from "react-router-dom";
import { Container, Button, Row, Spinner } from "react-bootstrap";

import Cards from "../Components/Cards/Cards";
import TableCars from "../Components/Table/TableCars";

import ModalAddCar from "../Components/Modals/ModalAddCar";

import { AiOutlineSearch } from "react-icons/ai";

import { getAllCars } from "../Controllers/Cars";

export default function Panel() {
  const [allCars, setAllCars] = useState([]);
  const [showModalAddCar, setShowModalAddCar] = useState(false);
  const [toggleSpinner, setToggleSpinner] = useState(false);

  const [brand1, setBrand] = useState("");
  const [color1, setColor] = useState("");
  const [licencePlate1, setLicencePlate] = useState("");
  const [model1, setModel] = useState("");
  const [sector1, setSector] = useState(false);

  const [addCarOnDB, setAddCarOnDB] = useState([]);

  async function getData() {
    const dataResponse = await getAllCars();
    if (dataResponse) {
      setAllCars(dataResponse);
      setToggleSpinner(true);
    }
  }

  useEffect(() => {
    getData();
  }, [allCars]);

  return (
    <>
      <ModalAddCar
        brand1={brand1}
        setBrand={setBrand}
        color1={color1}
        setColor={setColor}
        licencePlate1={licencePlate1}
        setLicencePlate={setLicencePlate}
        model1={model1}
        setModel={setModel}
        sector1={sector1}
        setSector={setSector}
        showModalAddCar={showModalAddCar}
        setShowModalAddCar={setShowModalAddCar}
        addCarOnDB={addCarOnDB}
        setAddCarOnDB={setAddCarOnDB}
        allCars={allCars}
      />
      <Container fluid>
        <div className="text-center" style={{ backgroundColor: "orange" }}>
          <AiOutlineSearch />
          <Button onClick={() => setShowModalAddCar(!showModalAddCar)}>
            Add Car
          </Button>
        </div>
        <div className="text-center" style={{ backgroundColor: "" }}>
          {allCars === 0 && !toggleSpinner ? (
            <Row>
              <Spinner
                className="mx-auto my-5 text-system"
                animation="border"
              />
            </Row>
          ) : (
            <TableCars allCars={allCars} />
          )}
        </div>
      </Container>
    </>
  );
}
