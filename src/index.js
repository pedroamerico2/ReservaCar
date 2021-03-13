import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./Routes/Routes";
import { ToastContainer } from "react-toastify";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <>
    <Routes />
    <ToastContainer autoClose={3000} />
  </>,
  document.getElementById("root")
);
