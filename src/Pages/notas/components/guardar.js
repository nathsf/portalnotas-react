import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import {MdSave, MdSecurity, MdSend} from "react-icons/md";
import SuccessSVG from '../../../components/svg/success';

export default function ModalSave(props) {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ copy, setCopy] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowSuccess = () => {
    setShow(false);
    setSuccess(true);
  }
  const handleCloseSuccess = () => {
    setSuccess(false);
  }
  const handleShowSend = () => {
    setSuccess(false);
    setCopy(true);
  }
  const handleCloseSend = () => {
    setCopy(false);
  }
  return (
    <>
     <Button className=" px-4 d-flex align-items-center" size="sm"  onClick={handleShow}>
            <MdSave className="me-2"/>
            Guardar
    </Button>
    

      <Modal show={show} onHide={handleClose}
       {...props}
       size="md"
       aria-labelledby="contained-modal-title-vcenter"
       centered>
        <Modal.Header closeButton>
          <Modal.Title  className='text-uppercase'><h5>VALIDACIÓN DE CÓDIGO TOKEN</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
        <p>Ingresa el token que se ha enviado a su correo personal <span className='fw-bold'>hector.cantaro@gmail.com</span></p>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
                <InputGroup.Text id="basic-addon1">
                    <MdSecurity/>
                </InputGroup.Text>

      </InputGroup>
        <p className='mb-0'>¿No le llegó el token a su correo?</p>
        
        <a href='#'>Reenviar código en 01:35</a>
        </Modal.Body>
        <Modal.Footer className='text-center border-0 mb-3'>
        <Button size="md" variant="primary" className="text-center mx-auto" onClick={handleShowSuccess}>
            Validar código
          </Button>
        
        </Modal.Footer>
      </Modal>

      <Modal show={success} onHide={handleCloseSuccess}
       {...props}
       size="md"
       aria-labelledby="contained-modal-title-vcenter"
       centered>
        <Modal.Header closeButton className='border-0'>
          <Modal.Title  className='text-uppercase '></Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center pt-0'>
            <div className='va-middle add-cart'>
            <div className="success-animation">
        <SuccessSVG/>
        </div>
            </div>
        
            
            <h6 className='text-uppercase mt-4'>LAS NOTAS SE GRABARON SATISFACTORIAMENTE
            </h6>
            <p className='mb-0'>Se ha enviado la constacia de registro a su correo institucional.</p>
        
       
        </Modal.Body>
        <Modal.Footer className='text-center border-0 mb-3'>
        
          <Button size="md" variant="primary" className="text-center mx-auto" onClick={handleShowSend}>
            <MdSend className='me-2' />           
            Enviar copia
          </Button>
        </Modal.Footer>
      </Modal> 

      <Modal show={copy} onHide={handleCloseSend}
       {...props}
       size="md"
       aria-labelledby="contained-modal-title-vcenter"
       centered>
        <Modal.Header closeButton>
          <Modal.Title  className='text-uppercase'><h5>ENVIAR COPIA DE ACTA</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
        <Form>
            <Row>
                <Col xs={12} md={6}>
                <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlInput1">
        <Form.Label>Para:</Form.Label>
        <Form.Control type="email" placeholder="Ingrese correo electrónico" />
      </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlInput1">
        <Form.Label>Copia a:</Form.Label>
        <Form.Control type="email" placeholder="Ingrese correo electrónico" />
      </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlTextarea1">
        
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      </Col>
                
     
            </Row>
        </Form>
        </Modal.Body>
        <Modal.Footer className='text-center border-0 mb-3'>
        <Button size="md" variant="primary" className="text-center mx-auto px-5" onClick={handleCloseSend}>
            Enviar
          </Button>
                   
          {/* <ModalSuccess  onClick={handleClose}/> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}