import React, { useEffect, useState } from "react";
import {} from "react-router-dom";
import { Container, Button, Row, Spinner, FormControl } from "react-bootstrap";

import TableCars from "../Components/Table/TableCars";

import ModalAddCar from "../Components/Modals/ModalAddCar";
import ModalDeleteCar from "../Components/Modals/ModalDeleteCar";
import ModalEditCar from "../Components/Modals/ModalEditCar";
import ModalPreviewCar from "../Components/Modals/ModalPreviewCar";

import { AiOutlineSearch } from "react-icons/ai";

import { getAllCars } from "../Controllers/Cars";

export default function Panel() {
  const [allCars, setAllCars] = useState([]);
  const [changeDb, setChangeDb] = useState(false);
  const [showModalAddCar, setShowModalAddCar] = useState(false);
  const [showModalDeleteCar, setShowModalDeleteCar] = useState(false);
  const [showModalEditCar, setShowModalEditCar] = useState(false);
  const [showModalPreviewCar, setShowModalPreviewCar] = useState(false);
  const [toggleSpinner, setToggleSpinner] = useState(false);

  const [searchOnList, setSearchOnList] = useState("");

  const [brand1, setBrand] = useState("");
  const [color1, setColor] = useState("");
  const [licencePlate1, setLicencePlate] = useState("");
  const [model1, setModel] = useState("");
  const [sector1, setSector] = useState(false);
  const [maintenance1, setMaintenance] = useState(false);
  const [reserve1, setReserve] = useState(true);
  const [wash1, setWash] = useState(false);
  const [carImg1, setCarImg] = useState("");

  async function getData() {
    const dataResponse = await getAllCars();
    if (dataResponse) {
      setAllCars(dataResponse);
      setToggleSpinner(true);
    }
  }

  function searchCarOnListToRemove(id) {
    const [carFilterToRemove] = allCars.filter((d) => d.id === id);
    if (carFilterToRemove) {
      setShowModalDeleteCar({
        id: carFilterToRemove.id,
        licencePlate: carFilterToRemove.licencePlate,
        show: true,
      });
    }
  }
  function searchCarOnListToEdit(id) {
    const [carFilterToEdit] = allCars.filter((d) => d.id === id);
    if (carFilterToEdit) {
      setShowModalEditCar({
        id: carFilterToEdit.id,
        licencePlate: carFilterToEdit.licencePlate,
        brand: carFilterToEdit.brand,
        color: carFilterToEdit.color,
        maintenance: carFilterToEdit.maintenance,
        model: carFilterToEdit.model,
        sector: carFilterToEdit.sector,
        wash: carFilterToEdit.wash,
        reserve: carFilterToEdit.reserve,
        carImg: carFilterToEdit.carImg,
        show: true,
      });
    }
  }
  function searchCarOnListToPreview(id) {
    const [carFilterToPreview] = allCars.filter((d) => d.id === id);
    if (carFilterToPreview) {
      setShowModalPreviewCar({
        id: carFilterToPreview.id,
        licencePlate: carFilterToPreview.licencePlate,
        brand: carFilterToPreview.brand,
        color: carFilterToPreview.color,
        maintenance: carFilterToPreview.maintenance,
        model: carFilterToPreview.model,
        sector: carFilterToPreview.sector,
        wash: carFilterToPreview.wash,
        reserve: carFilterToPreview.reserve,
        carImg: carFilterToPreview.carImg,
        show: true,
      });
    }
  }

  useEffect(() => {
    getData();
  }, [changeDb]);

  return (
    <>
      <ModalAddCar
        changeDb={changeDb}
        setChangeDb={setChangeDb}
        brand1={brand1}
        color1={color1}
        licencePlate1={licencePlate1}
        setLicencePlate={setLicencePlate}
        model1={model1}
        sector1={sector1}
        setSector={setSector}
        showModalAddCar={showModalAddCar}
        setShowModalAddCar={setShowModalAddCar}
        maintenance1={maintenance1}
        reserve1={reserve1}
        setReserve={setReserve}
        wash1={wash1}
        carImg1={carImg1}
        setCarImg={setCarImg}
        setBrand={setBrand}
        setColor={setColor}
        setModel={setModel}
        setMaintenance={setMaintenance}
        setWash={setWash}
      />
      <ModalDeleteCar
        changeDb={changeDb}
        setChangeDb={setChangeDb}
        showModalDeleteCar={showModalDeleteCar}
        setShowModalDeleteCar={setShowModalDeleteCar}
      />
      <ModalEditCar
        changeDb={changeDb}
        setChangeDb={setChangeDb}
        showModalEditCar={showModalEditCar}
        setShowModalEditCar={setShowModalEditCar}
      />
      <ModalPreviewCar
        showModalPreviewCar={showModalPreviewCar}
        setShowModalPreviewCar={setShowModalPreviewCar}
      />
      <Container fluid>
        <div className="text-center mt-1">
          <Button
            variant="success"
            style={{ background: "none", border: "none", float: "left" }}
          >
            <i
              onClick={() =>
                setShowModalAddCar(!showModalAddCar) +
                console.log(showModalAddCar)
              }
              className="material-icons"
              style={{ color: "black" }}
            >
              library_add
            </i>
          </Button>
          <FormControl
            type="text"
            style={{ width: "15%", float: "right", borderRadius: "0px" }}
            placeholder="Busca: modelo.. ou marca..."
            value={searchOnList}
            onChange={(e) => setSearchOnList(e.target.value)}
          />
          <AiOutlineSearch
            className=""
            style={{
              width: "38px",
              height: "38px",
              float: "right",
            }}
          />
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
            <TableCars
              allCars={allCars}
              searchCarOnListToRemove={searchCarOnListToRemove}
              searchOnList={searchOnList}
              searchCarOnListToEdit={searchCarOnListToEdit}
              searchCarOnListToPreview={searchCarOnListToPreview}
            />
          )}
        </div>
      </Container>
    </>
  );
}
