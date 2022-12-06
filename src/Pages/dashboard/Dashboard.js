import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import EventsItem from './components/EventsItem';
import Banner from "./components/Banner";
import Calendar from "./components/Calendar";
import CarouselBanner from "./components/CarouselBanner";

export default function Dashboard() {
    return (
           <>
           <Banner></Banner>
            <Container className=" pe-0">
                <Row>
                    <Col  xs={12} md={8}>
                    <Card style={{ width: '100%' }} className="text-start">
                    <Card.Header><Card.Title>Mis anuncios y avisos</Card.Title></Card.Header>

                    <Card.Body>
                        
                        <CarouselBanner/>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={12} md={4} className="mb-2">
                    <Card style={{ width: '100%' }} className="text-start">
                    <Card.Header><Card.Title>Accesos rápidos</Card.Title></Card.Header>
                    <Card.Body>
                        
                        <div className="d-flex accesos">
                                    <div className="w-50">
                                        <div className="acceso-1">
                                            <div>
                                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.85678 18.8576C9.17954 16.4767 11.6892 15 14.4129 15H15.5869C18.3107 15 20.8203 16.4767 22.1431 18.8576L24.1866 22.5359C25.1123 24.2022 23.9073 26.25 22.0012 26.25H7.99872C6.09251 26.25 4.88758 24.2022 5.81332 22.5359L7.85678 18.8576Z" fill="black"/>
                                                    <path opacity="0.3" d="M20 8.75C20 5.98858 17.7614 3.75 15 3.75C12.2386 3.75 10 5.98858 10 8.75C10 11.5114 12.2386 13.75 15 13.75C17.7614 13.75 20 11.5114 20 8.75Z" fill="black"/>
                                                </svg>
                                                <p>Mi Perfil
                                                </p>
                                            </div>                                                
                                        </div>

                                    </div>
                                    <div className="w-50">
                                        <div className="acceso-2">
                                            <div>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.3" d="M21.4 8.35315L19.241 10.5111L13.485 4.75512L15.643 2.59607C16.0248 2.21435 16.5426 2 17.0825 2C17.6224 2 18.1402 2.21435 18.522 2.59607L21.4 5.47412C21.7817 5.85593 21.9962 6.37367 21.9962 6.91357C21.9962 7.45347 21.7817 7.97134 21.4 8.35315ZM3.68696 21.9321L9.88696 19.8651L4.13096 14.1091L2.06396 20.3091C1.98812 20.5355 1.977 20.7788 2.03186 21.0112C2.08671 21.2437 2.20537 21.4562 2.37446 21.6249C2.54356 21.7935 2.75638 21.9116 2.98897 21.9659C3.22155 22.0202 3.46467 22.0085 3.69096 21.9321H3.68696Z" fill="#FFD500"/>
                                                    <path d="M5.57389 21.3L3.69189 21.928C3.4658 22.0032 3.22323 22.0141 2.99133 21.9594C2.75943 21.9046 2.54733 21.7864 2.37879 21.6179C2.21025 21.4495 2.09191 21.2375 2.037 21.0056C1.98209 20.7737 1.99278 20.5312 2.06788 20.3051L2.69589 18.422L5.57389 21.3ZM4.13488 14.105L9.89089 19.861L19.2449 10.507L13.4889 4.75098L4.13488 14.105Z" fill="#FFD500"/>
                                                    </svg>
                                                    
                                                <p>Registro 
                                                    Notas
                                                    
                                                </p>
                                            </div>                                                
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex mt-4 accesos">
                                    <div className="w-50">
                                        <div className="acceso-2">
                                            <div>
                                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.3" d="M23.75 27.5H6.25C5.5 27.5 5 27 5 26.25V3.75C5 3 5.5 2.5 6.25 2.5H17.5L25 10V26.25C25 27 24.5 27.5 23.75 27.5Z" fill="#FFD500"/>
                                                    <path d="M18.75 10H25L17.5 2.5V8.75C17.5 9.5 18 10 18.75 10Z" fill="#FFD500"/>
                                                    <path opacity="0.3" d="M23.75 27.5H6.25C5.5 27.5 5 27 5 26.25V3.75C5 3 5.5 2.5 6.25 2.5H17.5L25 10V26.25C25 27 24.5 27.5 23.75 27.5Z" fill="#FFD500"/>
                                                    <path d="M18.75 10H25L17.5 2.5V8.75C17.5 9.5 18 10 18.75 10Z" fill="#FFD500"/>
                                                    </svg>
                                                    
                                                <p>Evaluaciones
                                                </p>
                                            </div>                                                
                                        </div>

                                    </div>
                                    <div className="w-50">
                                        <div className="acceso-1">
                                            <div>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.3" d="M21.25 18.5249L13.05 21.8249C12.35 22.1249 11.65 22.1249 10.95 21.8249L2.75 18.5249C1.75 18.1249 1.75 16.7249 2.75 16.3249L4.04999 15.8249L10.25 18.3249C10.85 18.5249 11.45 18.6249 12.05 18.6249C12.65 18.6249 13.25 18.5249 13.85 18.3249L20.05 15.8249L21.35 16.3249C22.35 16.7249 22.35 18.1249 21.25 18.5249ZM13.05 16.4249L21.25 13.1249C22.25 12.7249 22.25 11.3249 21.25 10.9249L13.05 7.6249C12.35 7.3249 11.65 7.3249 10.95 7.6249L2.75 10.9249C1.75 11.3249 1.75 12.7249 2.75 13.1249L10.95 16.4249C11.65 16.7249 12.45 16.7249 13.05 16.4249Z" fill="black"/>
                                                    <path d="M11.0501 11.025L2.8501 7.725C1.8501 7.325 1.8501 5.925 2.8501 5.525L11.0501 2.225C11.7501 1.925 12.4501 1.925 13.1501 2.225L21.3501 5.525C22.3501 5.925 22.3501 7.325 21.3501 7.725L13.0501 11.025C12.4501 11.325 11.6501 11.325 11.0501 11.025Z" fill="black"/>
                                                    </svg>
                                                    
                                                <p>Servicios
                                                </p>
                                            </div>                                                
                                        </div>
                                    </div>
                                </div>
                        
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col  xs={12} md={8}>
                    <Card style={{ width: '100%' }} className="text-start">
                    <Card.Header>
                    <Card.Title>Mi calendario</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        
                        <Calendar></Calendar>
                     
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card style={{ width: '100%' }} className="text-start">
                        <Card.Header>
                    <Card.Title>Mis pendientes</Card.Title>
                    </Card.Header>
                        <Card.Body>
                            
                                    <EventsItem/>
                                    <EventsItem/>
                                    <EventsItem/>
                                    <EventsItem/>
                         
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
           </>
    );
}
