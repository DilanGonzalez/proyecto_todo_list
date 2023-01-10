import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";

import { useAuth } from "../../context/auth";

const Login = () => {
  const { iniciar_sesion } = useAuth();
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });
  const [messageError, setMessageError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessageError("");

    try {
      await iniciar_sesion(usuario.email, usuario.password);
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setMessageError("correo o contraseña incorrectos");
      } else if (err.code === "auth/wrong-password") {
        setMessageError("la contraseña es incorrecta");
      } else {
        setMessageError(err.message);
      }
    }
  };

  return (
    <Container>
      <Form className="mt-5, mx-5" onSubmit={handleSubmit}>
        <Form.Group className="mx-5, mt-5" controlId="correo">
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control
            type="email"
            placeholder="correo@dominio.com"
            onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mx-5, mt-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="************"
            onChange={(e) =>
              setUsuario({ ...usuario, password: e.target.value })
            }
          />
        </Form.Group>
        <Button className="mx-5, mt-3" variant="primary" type="submit">
          Iniciar Sesion
        </Button>
      </Form>
      {messageError === "" ? ( // =>condicion
        //=> if
        ""
      ) : (
        //=> else
        <Alert variant={"danger"} className="text-center mt-5">
          {messageError}
        </Alert>
      )}
    </Container>
  );
};

export default Login;
