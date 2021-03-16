import React, { useState, useEffect } from "react";
import {} from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import svgLinkedin from "../Assets/iconfinder_linked-in_1302087.svg";
import svgWhatsapp from "../Assets/iconfinder_whatsapp_1302098.svg";
import svgGitHub from "../Assets/iconfinder_github_1302084.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Dev.css";

export default function Dev() {
  return (
    <Container fluid className="text-center">
      <Row style={{ marginTop: "7%" }}>
        <div
          className="mx-auto text-center"
          style={{ width: "30%", height: "30%" }}
        >
          <img
            className="mx-auto"
            width="50%"
            height="50%"
            src="https://www.w3schools.com/w3css/img_avatar3.png"
          />
          <h1 className="mx-auto">Front-End</h1>
          <p className="mx-auto">Pedro</p>
        </div>
        <h1 style={{ marginTop: "5%" }}>+</h1>
        <div
          className="mx-auto text-center"
          style={{ width: "30%", height: "30%" }}
        >
          {" "}
          <img
            className="mx-auto"
            width="50%"
            height="50%"
            src="https://www.w3schools.com/w3css/img_avatar3.png"
          />
          <h1 className="mx-auto">Back-End</h1>
          <p className="mx-auto">Américo</p>
        </div>
        <h1 style={{ marginTop: "5%" }}>=</h1>
        <div className="mx-auto" style={{ width: "30%", height: "30%" }}>
          <img
            className="mx-auto text-center"
            width="50%"
            height="50%"
            src="https://www.w3schools.com/w3css/img_avatar3.png"
          />
          <h1 className="mx-auto">Full-Stack</h1>
          <p className="mx-auto">Pedro Américo</p>
        </div>
      </Row>
      <Row
        className="text-center devFooter"
        style={{
          background: "#343a40",
          color: "white",
          height: "100px",
        }}
      >
        <div style={{ width: "100%", height: "100px" }}>
          <Row className="mx-auto" style={{ width: "50%", heigth: "30px" }}>
            <a
              className="mt-2 mx-auto"
              style={{ height: "50px" }}
              href="https://www.linkedin.com/in/pedro-am%C3%A9rico-a3292393/"
            >
              <img width="100%" height="100%" src={svgLinkedin} />
            </a>
            <a
              className="mt-2 mx-auto"
              style={{ height: "50px" }}
              href="https://api.whatsapp.com/send?phone=5577988357722&text=Gostei do seu Sistema"
            >
              <img width="100%" height="100%" src={svgWhatsapp} />
            </a>
            <a
              className="mt-2 mx-auto"
              style={{ height: "50px" }}
              href="https://github.com/pedroamerico2"
            >
              <img width="100%" height="100%" src={svgGitHub} />
            </a>
          </Row>

          <p className="text-center" style={{ fontWeight: "lighter" }}>
            Contato: (77) 9 8835-7722 || pedroamerico@gmail.com
          </p>
        </div>
      </Row>
    </Container>
  );
}
