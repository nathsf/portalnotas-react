import React from "react";
import { Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap';
import ThreePicker from "./threepicker";
export default function NotasFilter() {
    return (


        <Form>
            <Row>
                <Col xs={12} md={4}>
                    <Form.Group className="mb-3 text-start">
                        <Form.Label className="text-start">Periodo</Form.Label>
                        <Form.Select className="form-select-sm">
                            <option>2022-01 (pregrado) </option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                    <Form.Group className="mb-3 text-start">
                        <Form.Label className="text-start">Asignatura</Form.Label>
                        <Form.Select className="form-select-sm">
                            <option>BIOQUIMICA</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                    <Form.Group className="mb-3 text-start">
                        <Form.Label className="text-start">Grupo</Form.Label>
                        <Form.Select className="form-select-sm">
                            <option>2022 - MD1</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                    <Form.Group className="mb-3 text-start">
                        <Form.Label className="text-start">Evaluación</Form.Label>
                        <ThreePicker/>
                        
                    </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                    <Form.Group className="mb-3 text-start">
                        <Form.Label className="text-start">Estado</Form.Label>
                        <Form.Select className="form-select-sm">
                            <option>Digitalizado</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                    <Form.Group className="mt-4 text-start">
                        <Button className="mt-2 px-5 btn btn-sm">Buscar</Button>
                    </Form.Group>

                </Col>
            </Row>

        </Form>


    )
}