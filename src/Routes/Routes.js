import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "../Routes/PrivateRoute";

import { AuthProvider } from "../Config/Auth";

import Header from "../Components/DefaultComponents/Header";

import Home from "../Pages/Home";
import Panel from "../Pages/Panel";
import Login from "../Pages/Login";
import Dev from "../Pages/Dev";

import "../index.css";

export default function Routes() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/panel" component={Panel} />
        <PrivateRoute exact path="/dev" component={Dev} />
        <Route exact path="/login" component={Login} />
      </Router>
    </AuthProvider>
  );
}
