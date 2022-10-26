import React from "react";
import Form from 'react-bootstrap/Form';

export default function Banner() {
    return (

           <>
           <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="d-flex align-items-center col-sm-12 col-md-6">
                            <h3>Bienvenido, 
                                Hector Cantaro Segura</h3>
                        </div>
                        <div className="banner-filter col-sm-12 col-md-6 d-flex justify-content-end"> 
                            <Form className="d-flex justify-content-end align-items-center">
                            <Form.Group className="mb-3">
                                <Form.Select >
                                <option>Disabled select</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Select >
                                <option>Disabled select</option>
                                </Form.Select>
                            </Form.Group>
                            
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            </>
            );
            }