import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {MdPlaylistAddCheck} from "react-icons/md";
import AvanceTable from './avanceTable';
import FileSVG from "../../../components/svg/fileyellow"

export default function ModalAvance(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button className="btn btn-sm  px-4" variant="outline-danger" data-bs-toggle="modal" data-bs-target="#avance"  onClick={handleShow}>
        <MdPlaylistAddCheck/>
                                             Ver Avance
    </Button>

      <Modal show={show} onHide={handleClose}
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title><h5>AVANCE DE LA PROGRAMACIÓN DE EVALUACIÓN
</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12}>
            <div className="d-flex bg-light  px-2 py-1 rounded" style={{width: "fit-content"}}>
                                        <FileSVG/>
                                            <p className="mb-0 ms-2 fw-medium fs-14">Evaluación: Practica 1 / 10-04-2021 al 17-04-2021</p>
            </div>
            </Col>
            <Col>
            <div className="d-flex mt-2 mb-4">
  <div className="d-flex mt-3 me-4">
    <div className="d-flex align-items-center">
      <h4 className="text-info mb-0">80%</h4>
    </div>
    <div className="d-flex align-items-center">
      <p className="small mb-0 ms-2 fw-normal" style={{ lineHeight: 1 }}>
        Total Notas
        <br />
        registradas
      </p>
    </div>
  </div>
  <div className="d-flex mt-3">
    <div className="d-flex align-items-center">
      <h4 className="text-warning mb-0">20%</h4>
    </div>
    <div className="d-flex align-items-center">
      <p className="small mb-0 ms-2 fw-normal" style={{ lineHeight: 1 }}>
        Total Notas
        <br />
        sin registrar
      </p>
    </div>
  </div>
</div>
            </Col>
          </Row>
          <AvanceTable/>
        </Modal.Body>
        <Modal.Footer className='text-center mx-auto border-0 pb-4'>
          
          <Button variant="primary" onClick={handleClose} className="px-4">
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}