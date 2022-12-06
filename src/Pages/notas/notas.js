import React from "react";
import {Container,  Row, Col, Card, Button, ButtonGroup} from 'react-bootstrap';
import BsTable from "./components/table-bs";
import NotasFilter from "./components/notasFilter";
import {BsEye, BsPencilSquare} from "react-icons/bs";
import FileSVG from "../../components/svg/fileyellow"
import ModalAvance from "./components/modalAvance";
import ModalSave from "./components/guardar";
export default function Notas() {
    return (
        <>
        <Container className=" pe-0 notas ">
        <Row>
            <Col  xs={12} md={12} className="pt-4 pb-3">
                <h4 className="text-uppercase text-start">Registro de Notas</h4>
            </Col>
        </Row>
        <Row>
            <Col  xs={12} md={12}>
                <Card>
                <Card.Header className="px-4">
                    <Row>
                            <Col xs={12} md={6} className="d-flex justify-content-start py-1">
                            <ButtonGroup size="sm" aria-label="Basic example">
                                <Button variant="primary" className="px-4 d-flex align-items-center "><BsPencilSquare className="me-2"/>Registrar</Button>
                                <Button variant="outline-danger" className="px-4 d-flex align-items-center"><BsEye className="me-2"/>Visualizar</Button>
                            </ButtonGroup>
                                                                
                              
                            </Col>
                            <Col xs={12} md={6} className="d-flex justify-content-end py-1">
                            
                           <ModalSave/>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body className="p-4">
                        <NotasFilter/>
                    </Card.Body>
                    
                </Card>
                </Col>
        </Row>
        <Row>
            <Col  xs={12} md={12}>
                <Card>
                    
                    <Card.Body className="p-4">
                        <Row>
                            <Col xs={12} md={6}>
                            
                                    <h6 className="text-uppercase fw-bold mb-0 text-start"> B0012 - BIOQUIMICA</h6>
                              
                            </Col>
                            <Col xs={12} md={6} className="d-flex justify-content-end">
                            <ModalAvance/>
                            
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col xs={12} md={6}>
                            
                            <div className="d-flex bg-light  px-2 py-1 rounded" style={{width: "fit-content"}}>
                                        <FileSVG/>
                                            <p className="mb-0 ms-2 fw-medium fs-14">Evaluación: Practica 1 / 10-04-2021 al 17-04-2021</p>
                                    </div>
                              
                            </Col>
                            <Col xs={12} md={6}>
                            <div className="d-flex justify-content-end notas-div">
                                        <ul className="d-flex justify-content-end info-notas">
                                            <li className="me-4 text-danger">
                                                <p className="mb-0 me-4  fw-regular text-black ">Nota mínima: 0</p>
                                            </li>
                                            <li className="me-4 text-primary">
                                                <p className="mb-0 me-4 fw-regular text-black ">Nota máxima: 20</p>
                                            </li>
                                            <li className="text-warning">
                                                <p className="mb-0  fw-regular text-black ">Nota mínima aprobatoria: 10.5</p>
                                            </li>
                                        </ul>
                                    </div>
                              
                            </Col>
                        </Row>
                    {/* <NotasTable/> */}
                    <BsTable/>
                    </Card.Body>
                    
                </Card>
                </Col>
        </Row>
            
        </Container>
        </>
    )
}