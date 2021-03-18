import React, { useState, useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";

import { AuthContext } from "../Config/Auth";

import { Form, Button, Container, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { signIn } from "../Controllers/Login";

function Login({ history }) {
  const [seePass, setSeePass] = useState(false);

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        signIn(email.value, password.value);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <Container
      className="bg-light-transparency text-dark rounded py-4 login-box my-5"
      style={{ "max-width": "400px", maxHeigth: "400px" }}
    >
      <Form onSubmit={handleLogin}>
        <h1 className="text-center">
          <Container className="border-0">
            <img
              src="http://sirtec.com.br/wp-content/themes/sirtec/images/sirtec_logo.png"
              width="200"
              height="100"
              className="d-inline-block align-top mb-5 mt-5"
              alt="React Bootstrap logo"
            />
          </Container>
        </h1>
        <Form.Group>
          <Form.Control
            name="email"
            type="email"
            placeholder="Informe seu Email"
            className="rounded shadow-none"
          />
        </Form.Group>
        <Form.Group>
          <InputGroup>
            <Form.Control
              name="password"
              type={seePass ? "text" : "password"}
              placeholder="Sua senha"
              className="shadow-none"
            />
            <InputGroup.Prepend>
              <InputGroup.Text
                id="inputGroupPrepend"
                className="rounded-right link"
                onClick={() => setSeePass(!seePass)}
              >
                {seePass ? <FaEyeSlash /> : <FaEye />}
              </InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
        </Form.Group>
        <Form.Group className="w-auto text-center mt-4 mb-0">
          <Button type="submit" className="rounded px-4 bg-system">
            Entrar
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default withRouter(Login);
