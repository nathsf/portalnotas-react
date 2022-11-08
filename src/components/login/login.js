import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Container, Col, Row, Card} from 'react-bootstrap'
import LoginCarousel from './loginCarousel';

import logo from '../../assets/img/logo.png';
import captchaImg from '../../assets/img/captcha.png';
import {BsGlobe} from 'react-icons/bs'
async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
   <>
    <Container fluid className='login'>
        <Row className='vh-95 va-middle'>
            <Card>
              <Row>
                <Col sm={12} md={6} className='form-div px-0'>
                <div className="login-header d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                                <img src={logo}/>
                            </div>
                            <div className="config-lang">
                                <BsGlobe className='text-danger'/>
                                <select className="form-select form-select-sm select-lang" >
                                  <option selected>Español</option>
                                  <option value="1">English</option>
                                </select>
                              </div>
                        </div>
                        <div className="login-content d-flex align-items-center justify-content-center">
                          
                          <div className="center">
                            <div className="log-title">
                              <h1>Iniciar Sesión</h1>
                            </div>

                              <form onSubmit={handleSubmit}>
                                <p>Ingresa al nuevo sistema con tus credenciales activas, correo institucional y contraseña.</p>

                                  <div className="mb-3">
                                      <label for="exampleFormControlInput1" className="">Correo institucional</label>
                                      <div className="input-group flex-nowrap">
                                        <input type="email" className="form-control login-control form-control-sm" id="exampleFormControlInput1" onChange={e => setUserName(e.target.value)} placeholder="Email"/>
                                        <span className="input-group-text login-control " id="addon-wrapping"> <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.5 3.66663C12.5167 3.66663 13.4917 4.05293 14.2106 4.74057C14.9295 5.4282 15.3333 6.36083 15.3333 7.33329C15.3333 8.30575 14.9295 9.23838 14.2106 9.92602C13.4917 10.6137 12.5167 11 11.5 11C10.4833 11 9.50831 10.6137 8.78942 9.92602C8.07053 9.23838 7.66666 8.30575 7.66666 7.33329C7.66666 6.36083 8.07053 5.4282 8.78942 4.74057C9.50831 4.05293 10.4833 3.66663 11.5 3.66663ZM11.5 5.49996C10.9917 5.49996 10.5042 5.69311 10.1447 6.03693C9.78526 6.38075 9.58333 6.84706 9.58333 7.33329C9.58333 7.81952 9.78526 8.28584 10.1447 8.62965C10.5042 8.97347 10.9917 9.16663 11.5 9.16663C12.0083 9.16663 12.4958 8.97347 12.8553 8.62965C13.2147 8.28584 13.4167 7.81952 13.4167 7.33329C13.4167 6.84706 13.2147 6.38075 12.8553 6.03693C12.4958 5.69311 12.0083 5.49996 11.5 5.49996ZM11.5 11.9166C14.0587 11.9166 19.1667 13.1358 19.1667 15.5833V18.3333H3.83333V15.5833C3.83333 13.1358 8.94124 11.9166 11.5 11.9166ZM11.5 13.6583C8.65374 13.6583 5.65416 14.9966 5.65416 15.5833V16.5916H17.3458V15.5833C17.3458 14.9966 14.3462 13.6583 11.5 13.6583Z" fill="#828282"/>
                                            </svg>
                                            
                                          
                                        </span>

                                      </div>
                                    </div>
                                    <div className="mb-3">
                                      <label for="inputPassword2" className="">Contraseña</label>
                                      <div className="input-group flex-nowrap">
                                        <input type="password" className="form-control login-control form-control-sm" id="inputPassword2" placeholder="Contraseña" onChange={e => setPassword(e.target.value)}/>
                                        <span className="input-group-text login-control " id="addon-wrapping"> <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66666 4.17204L2.73333 3.16663L16.6667 16.4033L15.6083 17.4166L13.0417 14.9783C12.0833 15.2791 11.0667 15.4375 10 15.4375C5.83333 15.4375 2.27499 12.9754 0.833328 9.49996C1.40833 8.10663 2.325 6.87954 3.49166 5.90579L1.66666 4.17204ZM10 7.12496C10.663 7.12496 11.2989 7.37518 11.7678 7.82058C12.2366 8.26598 12.5 8.87007 12.5 9.49996C12.5 9.77704 12.45 10.0462 12.3583 10.2916L9.16666 7.25954C9.425 7.17246 9.70833 7.12496 10 7.12496ZM10 3.56246C14.1667 3.56246 17.725 6.02454 19.1667 9.49996C18.4833 11.1466 17.325 12.5716 15.8333 13.6087L14.65 12.4766C15.7833 11.7325 16.7167 10.7191 17.35 9.49996C15.975 6.83996 13.1333 5.14579 10 5.14579C9.09166 5.14579 8.2 5.28829 7.36666 5.54163L6.08333 4.33038C7.28333 3.83954 8.60833 3.56246 10 3.56246ZM2.65 9.49996C4.025 12.16 6.86666 13.8541 10 13.8541C10.575 13.8541 11.1417 13.7987 11.6667 13.6879L9.76666 11.875C8.575 11.7562 7.625 10.8537 7.5 9.72163L4.66666 7.02204C3.84166 7.69496 3.15 8.53413 2.65 9.49996Z" fill="#5F5F5F"/>
                                            </svg>
                                            
                                          
                                        </span>
                                      </div>

                                    </div>
                                    <label className="container-checkbox">Recordar usuario
                                      <input type="checkbox"/>
                                      <span className="checkmark"></span>
                                    </label>
                                    <div className="text-center div-captcha">
                                            <img style={{width: '70%'}} src={captchaImg}/>
                                    </div>
                                    <div className="text-center mt-3">
                                      <button type="submit" className="btn btn-send btn-login mb-3" >Ingresar</button>
                                      <a href="#" className="mt-2 d-block">¿Olvidaste tu contraseña?</a>
  
                                    </div>
  
                              </form>
                          </div>
                        </div>
                        
                </Col>
                <Col sm={12} md={6} className='d-sm-none d-md-block px-0 carousel-div'>
                  <LoginCarousel></LoginCarousel>
                </Col>

              </Row>
            </Card>
        </Row>
      </Container>
      <div className="footer fixed ">
        <div>
            <p>©2022 Universidad Peruana Cayetano Heredia</p>
        </div>
    </div>
   </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};