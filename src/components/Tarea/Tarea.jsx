import React from "react";
import { Col, Row } from "react-bootstrap";

const Tarea = ({ datos }) => {
  return (
    <div className="mt-2">
      <Row>
        <Col xs="auto">
          <input type="checkbox" defaultChecked={datos.completado} />
        </Col>
        <Col xs="7">{datos.tarea}</Col>
        <Col md="auto">
          <button type="button" class="btn btn-warning">
            Editar
          </button>
        </Col>
        <Col md="auto">
          <button type="button" class="btn btn-danger">
            Eliminar
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default Tarea;
