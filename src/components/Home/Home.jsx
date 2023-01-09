import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useAuth } from "../../context/auth";
import Tarea from "../Tarea/Tarea";

const Home = () => {
  const { usuario } = useAuth();
  console.log(usuario)
  const [tarea, setTarea] = useState("");
  //const datos = JSON.parse(localStorage.getItem(null));
  const [tareas, setTareas] = useState( []);

  /*useEffect(() => {
    if (datos.tareas) {
      setTareas(datos.tareas);
    }
  },[datos]);*/

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, { tarea: tarea, completado: false }]);
    setTarea("");
  };

  return (
    <Container>
      <h1 className="mx-5, mt-5">Bienvenido </h1>
      <Form className="mt-5" onSubmit={handleSubmit}>
        <Form.Group className="mx-5, mt-5" controlId="nuevaTarea">
          <Form.Control
            type="text"
            placeholder="Nueva Tarea"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          />
          <Button className="mx-5, mt-3" variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>

        <Container className="mt-5">
          <div className="list-group">
           
          </div>
        </Container>
      </Form>
    </Container>
  );
};

export default Home;
