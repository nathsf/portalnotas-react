import React from 'react';
import {Container, Col, Row, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeaderLogin from './components/headerLogin';
import LoginCarousel from './components/loginCarousel';
import FooterLogin from './components/footerLogin';

export default function ChangePassword() {

  return(
   <>
    <Container fluid className='login'>
        <Row className='vh-95 va-middle'>
            <Card>
              <Row>
                <Col sm={12} md={6} className='form-div px-0'>
                <HeaderLogin/>
                        <div className="login-content d-flex align-items-center justify-content-center">
                          
                            <div className="center">
                              <div className="log-title">
                                <h1>Restaurar Contraseña</h1>
                              </div>

                                <form >
                                  <p>Ingrese una nueva contraseña.</p>

                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="">Contraseña</label>
                                        <div className="input-group flex-nowrap">
                                        <input type="password" className="form-control login-control form-control-sm" id="inputPassword2" placeholder="Contraseña" />
                                        <span className="input-group-text login-control " id="addon-wrapping"> <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66666 4.17204L2.73333 3.16663L16.6667 16.4033L15.6083 17.4166L13.0417 14.9783C12.0833 15.2791 11.0667 15.4375 10 15.4375C5.83333 15.4375 2.27499 12.9754 0.833328 9.49996C1.40833 8.10663 2.325 6.87954 3.49166 5.90579L1.66666 4.17204ZM10 7.12496C10.663 7.12496 11.2989 7.37518 11.7678 7.82058C12.2366 8.26598 12.5 8.87007 12.5 9.49996C12.5 9.77704 12.45 10.0462 12.3583 10.2916L9.16666 7.25954C9.425 7.17246 9.70833 7.12496 10 7.12496ZM10 3.56246C14.1667 3.56246 17.725 6.02454 19.1667 9.49996C18.4833 11.1466 17.325 12.5716 15.8333 13.6087L14.65 12.4766C15.7833 11.7325 16.7167 10.7191 17.35 9.49996C15.975 6.83996 13.1333 5.14579 10 5.14579C9.09166 5.14579 8.2 5.28829 7.36666 5.54163L6.08333 4.33038C7.28333 3.83954 8.60833 3.56246 10 3.56246ZM2.65 9.49996C4.025 12.16 6.86666 13.8541 10 13.8541C10.575 13.8541 11.1417 13.7987 11.6667 13.6879L9.76666 11.875C8.575 11.7562 7.625 10.8537 7.5 9.72163L4.66666 7.02204C3.84166 7.69496 3.15 8.53413 2.65 9.49996Z" fill="#5F5F5F"/>
                                            </svg>
                                            
                                          
                                        </span>
                                      </div>
                                      </div>
                                      <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="">Nueva contraseña</label>
                                        <div className="input-group flex-nowrap">
                                        <input type="password" className="form-control login-control form-control-sm" id="inputPassword2" placeholder="Contraseña" />
                                        <span className="input-group-text login-control " id="addon-wrapping"> <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66666 4.17204L2.73333 3.16663L16.6667 16.4033L15.6083 17.4166L13.0417 14.9783C12.0833 15.2791 11.0667 15.4375 10 15.4375C5.83333 15.4375 2.27499 12.9754 0.833328 9.49996C1.40833 8.10663 2.325 6.87954 3.49166 5.90579L1.66666 4.17204ZM10 7.12496C10.663 7.12496 11.2989 7.37518 11.7678 7.82058C12.2366 8.26598 12.5 8.87007 12.5 9.49996C12.5 9.77704 12.45 10.0462 12.3583 10.2916L9.16666 7.25954C9.425 7.17246 9.70833 7.12496 10 7.12496ZM10 3.56246C14.1667 3.56246 17.725 6.02454 19.1667 9.49996C18.4833 11.1466 17.325 12.5716 15.8333 13.6087L14.65 12.4766C15.7833 11.7325 16.7167 10.7191 17.35 9.49996C15.975 6.83996 13.1333 5.14579 10 5.14579C9.09166 5.14579 8.2 5.28829 7.36666 5.54163L6.08333 4.33038C7.28333 3.83954 8.60833 3.56246 10 3.56246ZM2.65 9.49996C4.025 12.16 6.86666 13.8541 10 13.8541C10.575 13.8541 11.1417 13.7987 11.6667 13.6879L9.76666 11.875C8.575 11.7562 7.625 10.8537 7.5 9.72163L4.66666 7.02204C3.84166 7.69496 3.15 8.53413 2.65 9.49996Z" fill="#5F5F5F"/>
                                            </svg>
                                            
                                          
                                        </span>
                                      </div>
                                      </div>
                                      <div className="text-center mt-4">
                                      <button type="submit" className="btn btn-send btn-login mt-4 mb-3" ><Link to="/success" className='text-white fs-6 text-decoration-none'>Restaurar Contraseña</Link></button>

                                      </div>
                                </form>
                            </div>
                        </div>
                        
                </Col>
               
                <LoginCarousel></LoginCarousel>
                

              </Row>
            </Card>
        </Row>
      </Container>
      <FooterLogin/>
   </>
  )
}
