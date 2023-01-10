import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useAuth } from "../../context/auth";
import Tarea from "../Tarea/Tarea";

const Home = () => {
  const { usuario } = useAuth();

  const data = JSON.parse(localStorage.getItem(usuario.email));

  const [tareas, setTareas] = useState(data.tareas || []);
  const [tarea, setTarea] = useState("");

  useEffect(() => {
    if (data) {
      setTarea(data.tareas);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem(
      data.email,
      JSON.stringify({ ...data, tareas: tareas })
    );
    setTarea("");
    // eslint-disable-next-line
  }, [tareas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, { tarea: tarea, completado: false }]);
    setTarea("");
  };
  const completarTarea = (nombreTarea) => {
    setTareas(
      tareas.map((tr) =>
        tr.tarea === nombreTarea ? { ...tr, completado: !tr.completado } : tr
      )
    );
  };
  const borrarTarea = (nombreTarea) => {
    setTareas(tareas.filter((tr) => tr.tarea !== nombreTarea));
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
            {tareas.map((tr) => {
              return (
                <Tarea
                  key={tr.tarea}
                  setTareas={setTareas}
                  tareas={tareas}
                  datos={tr}
                  completarTarea={completarTarea}
                  borrarTarea={borrarTarea}
                />
              );
            })}
          </div>
        </Container>
      </Form>
    </Container>
  );
};

export default Home;
