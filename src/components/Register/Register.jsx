import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useAuth } from "../../context/auth";

const Register = () => {
  document.title = "Registrarse";
  const { registrarse } = useAuth();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    Password: "",
  });

  const [messageError, setMessageError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessageError("");

    try {
      await registrarse(userData.email, userData.Password);
      localStorage.setItem(userData.email, JSON.stringify(userData));
    } catch (err) {
      if (err.code === "auth/weak-password") {
        setMessageError("La contraseña tiene que tener minimo 6 caracteres");
      } else if (err.code === "auth/email-already-in-use") {
        setMessageError("El correo ya exite");
      } else if (err.code === "auth/invalid-email") {
        setMessageError("Correo invalido");
      } else {
        setMessageError(err.message);
      }
    }
  };
  useEffect(()=>{

  }, [messageError])
  return (
    <>
      <Container>
        <Form className="mt-5" onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="firstName"
                onChange={(e) =>
                  setUserData({ ...userData, firstName: e.target.value })
                }
                required
              >
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="txt" placeholder="Ingrese primer nombre" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="lastName"
                onChange={(e) =>
                  setUserData({ ...userData, lastName: e.target.value })
                }
                required
              >
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="txt"
                  placeholder="Ingrese primer apellido"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group
            className="mb-3"
            controlId="email"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            required
          >
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control type="email" placeholder="correo@dominio.com" />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="Password"
            onChange={(e) =>
              setUserData({ ...userData, Password: e.target.value })
            }
            required
          >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="**************" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Registrarse
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
    </>
  );
};

export default Register;
