import React from "react";
import { Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap';

export default function NotasFilter() {
    return (


        <Form>
            <Row>
                <Col xs={12} md={4}>
                    <Form.Group className="mb-3 text-start">
                        <Form.Label className="text-start">Periodo</Form.Label>
                        <Form.Select className="form-select-sm">
                            <option>Disabled select</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                    <Form.Group className="mb-3 text-start">
                        <Form.Label className="text-start">Periodo</Form.Label>
                        <Form.Select className="form-select-sm">
                            <option>Disabled select</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                    <Form.Group className="mb-3 text-start">
                        <Form.Label className="text-start">Periodo</Form.Label>
                        <Form.Select className="form-select-sm">
                            <option>Disabled select</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                    <Form.Group className="mb-3 text-start">
                        <Form.Label className="text-start">Periodo</Form.Label>
                        <Form.Select className="form-select-sm">
                            <option>Disabled select</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                    <Form.Group className="mb-3 text-start">
                        <Form.Label className="text-start">Periodo</Form.Label>
                        <Form.Select className="form-select-sm">
                            <option>Disabled select</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                    <Form.Group className="mt-4 text-start">
                        <Button>Buscar</Button>
                    </Form.Group>

                </Col>
            </Row>

        </Form>


    )
}