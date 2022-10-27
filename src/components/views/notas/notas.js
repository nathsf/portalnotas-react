import React from "react";
import {Container,  Row, Col, Card} from 'react-bootstrap';
import NotasTable from "./components/table";
import NotasFilter from "./components/notasFilter";
export default function Notas() {
    return (
        <>
        <Container className=" pe-0 ">
        <Row>
            <Col  xs={12} md={12} className="pt-4 pb-3">
                <h4 className="text-uppercase text-start">Registro de Notas</h4>
            </Col>
        </Row>
        <Row>
            <Col  xs={12} md={12}>
                <Card>
                    <Card.Body>
                        <NotasFilter/>
                    </Card.Body>
                    
                </Card>
                </Col>
        </Row>
        <Row>
            <Col  xs={12} md={12}>
                <Card>
                    <Card.Body>
                    <NotasTable/>
                    </Card.Body>
                    
                </Card>
                </Col>
        </Row>
            
        </Container>
        </>
    )
}