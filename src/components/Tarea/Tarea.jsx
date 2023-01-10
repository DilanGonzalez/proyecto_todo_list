import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const Tarea = ({ datos, completarTarea, borrarTarea, tareas, setTareas }) => {
  const [actualizarTarea, setActualizarTarea] = useState(datos.tarea);
  const [editable, setEditable] = useState(false);

  const guardar = () => {
    setTareas(
      tareas.filter(tr => tr.tarea === datos.tarea ? tr.tarea = actualizarTarea : tr)
    )
    setEditable(false)
  };
  useEffect(() => {}, [actualizarTarea]);

  return (
    <div className="mt-2">
      <Row>
        <Col xs="auto">
          <input
            type="checkbox"
            onClick={() => completarTarea(datos.tarea)}
            defaultChecked={datos.completado}
          />
        </Col>
        <Col xs="7">
          {editable ? (
            <input
              type="text"
              defaultValue={datos.tarea}
              onChange={(e) => {
                setActualizarTarea(e.target.value);
              }}
            />
          ) : datos.completado ? (
            <del>{datos.tarea}</del>
          ) : (
            datos.tarea
          )}
        </Col>
        {editable ? (
          <Col>
            <button
              className="btn btn-success"
              type="button"
              onClick={guardar}
            >
              Guardar
            </button>
          </Col>
        ) : (
          <>
            <Col md="auto">
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                  setEditable(true);
                }}
              >
                Editar
              </button>
            </Col>
            <Col md="auto">
              <button
                type="button"
                onClick={() => borrarTarea(datos.tarea)}
                className="btn btn-danger"
              >
                Eliminar
              </button>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};

export default Tarea;
