import React, { useState, useEffect } from "react";
import {} from "react-router-dom";
import { Container, Row, Spinner } from "react-bootstrap";

import Cards from "../Components/Cards/Cards";

import { getAllCars } from "../Controllers/Cars";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Home.css";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [toggleSpinner, setToggleSpinner] = useState(false);
  async function getData() {
    const dataResponse = await getAllCars();
    if (dataResponse) {
      setAllCars(dataResponse);
      setToggleSpinner(true);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container fluid>
        {allCars === 0 && !toggleSpinner ? (
          <Row>
            <Spinner className="mx-auto my-5 text-system" animation="border" />
          </Row>
        ) : (
          <Cards allCars={allCars} />
        )}
      </Container>
    </>
  );
}
