import React from "react";
import Form from 'react-bootstrap/Form';
import { CustomProvider } from 'rsuite';
import { DateRangePicker } from 'rsuite';
import { esES } from "rsuite/esm/locales";
import {FiUser} from "react-icons/fi";

export default function Banner() {
    return (

           <>
           <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="d-flex align-items-center col-sm-12 col-md-6">
                            <FiUser/>
                            <h3 className="mb-0">Bienvenido, 
                                Hector Cantaro Segura</h3>
                        </div>
                        <div className="banner-filter col-sm-12 col-md-6 d-flex justify-content-end"> 
                            <Form className="d-flex justify-content-end align-items-center">
                            <Form.Group className="">
                                <Form.Select >
                                <option>Seleccionar Asignatura</option>
                                <option>Bioquimica</option>
                                <option>Medicina Humana</option>

                                </Form.Select>
                            </Form.Group>
                            
                            <Form.Group className="">
                            <CustomProvider locale={esES}>
                            <DateRangePicker placeholder="Seleccionar Fecha"  locale={{
                                    sunday: 'Do',
                                    monday: 'Lu',
                                    tuesday: 'Mar',
                                    wednesday: 'Mi',
                                    thursday: 'Ju',
                                    friday: 'Vi',
                                    saturday: 'Sa',
                                    ok: 'OK',
                                    today: 'Hoy',
                                    yesterday: 'Ayer',
                                    hours: 'Horas',
                                    minutes: 'Minutos',
                                    last7Days: 'Últimos 7 días',
                                    seconds: 'Segundos'
                                }}
                                placement="leftStart"/>
                                </CustomProvider>
                                
                            </Form.Group>
                            
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            </>
            );
            }