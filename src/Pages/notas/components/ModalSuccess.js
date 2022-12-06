import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {MdSend} from 'react-icons/md'
export default function ModalSuccess() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <Button variant="primary" className="text-center mx-auto" onClick={handleShow}>
            Validar código
          </Button>
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='border-0'>
          <Modal.Title  className='text-uppercase '></Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>

            <h5 className='text-uppercase'>LAS NOTAS SE GRABARON SATISFACTORIAMENTE
</h5>
        <p>Se ha enviado la constacia de registro a su correo institucional.</p>
        
       
        </Modal.Body>
        <Modal.Footer className='text-center border-0 mb-3'>
        
          <Button variant="primary" className="text-center mx-auto" onClick={handleClose}>
            <MdSend/>           
            Enviar copia
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}