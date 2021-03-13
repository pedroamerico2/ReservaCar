import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Config/Auth";
import firebaseConfig from "../../Config/FirebaseConfig";
import "./Styles/Header.css";

export default function Header() {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      {!!currentUser && (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          {" "}
          <Navbar.Brand href="#home">
            <img
              src="http://sirtec.com.br/wp-content/themes/sirtec/images/sirtec_logo.png"
              width="163"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/panel">Painel</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>More deets</Nav.Link>
              <Nav.Link onClick={() => firebaseConfig.auth().signOut()}>
                Sair
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
    </>
  );
}
