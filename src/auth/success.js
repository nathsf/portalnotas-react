import React from 'react';
import {Container, Col, Row, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeaderLogin from './components/headerLogin';
import LoginCarousel from './components/loginCarousel';
import FooterLogin from './components/footerLogin';

export default function SuccessLogin() {

  return(
   <>
    <Container fluid className='login'>
        <Row className='vh-95 va-middle'>
            <Card>
              <Row>
                <Col sm={12} md={6} className='form-div px-0'>
                <HeaderLogin/>
                        <div className="login-content d-flex align-items-center justify-content-center">
                          
                        <div className="center" style={{width: "300px"}}>
                            <div className="success-animation">
                              <svg className="checkmark-animation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
                              </div>
                              
                            <div className="log-title my-4 mx-auto">
                              <h1 className="title-success text-center">Cambio de Contraseña <br/>
                                satisfactorio</h1>
                            </div>
                              
                              
                              <div className="text-center mt-5">
                                <button type="button" className="btn btn-send btn-login mb-3" ><Link to="/" className='text-white fs-6 text-decoration-none'>Volver a inicio de sesión</Link></button>

                              </div>
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
