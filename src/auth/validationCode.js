import React from 'react';
import {Container, Col, Row, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeaderLogin from './components/headerLogin';
import LoginCarousel from './components/loginCarousel';
import FooterLogin from './components/footerLogin';

export default function Validation() {

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
                                <h1>Validación de seguridad</h1>
                              </div>

                                <form >
                                  <p>Ingrese el código de 6 dígitos que se envió a su correo electrónico personal.</p>
                                  <a  className="mb-2 text-secondary d-block">Reenviar código en 01:35</a>

                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="">Ingresar código de 6 dígitos</label>
                                        <div className="input-group flex-nowrap">
                                        <input type="text" className="form-control login-control form-control-sm" id="exampleFormControlInput1" placeholder="0 0 0 0 0 0" />
                                        <span className="input-group-text login-control " id="addon-wrapping"> <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M21 11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1L21 5V11ZM12 21C15.75 20 19 15.54 19 11.22V6.3L12 3.18L5 6.3V11.22C5 15.54 8.25 20 12 21ZM14.8 11V9.5C14.8 8.1 13.4 7 12 7C10.6 7 9.2 8.1 9.2 9.5V11C8.6 11 8 11.6 8 12.2V15.7C8 16.4 8.6 17 9.2 17H14.7C15.4 17 16 16.4 16 15.8V12.3C16 11.6 15.4 11 14.8 11ZM13.5 11H10.5V9.5C10.5 8.7 11.2 8.2 12 8.2C12.8 8.2 13.5 8.7 13.5 9.5V11Z" fill="#828282"/>
                                          </svg>
                                          
                                          
                                        </span>

                                        </div>
                                      </div>
                                      
                                      <div className="text-center mt-4">
                                      <button type="submit" className="btn btn-send btn-login mt-4 mb-3" ><Link to="/change-password" className='text-white fs-6 text-decoration-none'>Validar código</Link></button>
                                      <Link to="/" className="mt-2 d-block">Volver a inicio de sesión</Link>

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
