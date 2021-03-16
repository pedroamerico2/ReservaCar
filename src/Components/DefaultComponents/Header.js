import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Config/Auth";
import firebaseConfig from "../../Config/FirebaseConfig";
import "./Styles/Header.css";

export default function Header() {
  const { currentUser, userData } = useContext(AuthContext);
  return (
    <>
      {!!currentUser && (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          {" "}
          <Navbar.Brand>
            <Link to="/">
              <img
                src="https://lh3.googleusercontent.com/proxy/4hKhLIJK21X62E8M8ZWii_9-EoUgLvPxGuIu0S4JFcm8SJ09GfWXYOwutreVrjjq7Fns61ggw9u2ZHoRnNQvQgw5KqzAQkCeCdSImksPTZKM1FlWvU1kQadFOhaD"
                width="130"
                height="50"
                className="d-inline-block align-top imgLogo"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/panel">Painel</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/dev">Contato</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>{"Bem vindo: " + userData.name}</Nav.Link>
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
