import './scss/styles.js';
import './App.css';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Switch
} from "react-router-dom";
import { Button } from 'react-bootstrap';

import useToken from './components/auth/useToken'

import SideHeader from './components/layout/sidemenu';
import NavBar from './components/layout/header';
import Footer from './components/layout/footer.js';

import Dashboard from './components/views/dashboard/Dashboard';
import Notas from './components/views/notas/notas';
import Error404 from './components/views/Error404.js';

import Login from './components/auth/login.js';
import ForgotPassword from './components/auth/forgotPassword.js';
import Validation from './components/auth/validationCode.js';
import ChangePassword from './components/auth/changePassword.js';
import SuccessLogin from './components/auth/success.js';


function App() {
  const { token, setToken } = useToken();
  useEffect(() => {
    document.title = 'Portal de Notas';
  });

  if(!token) {
    // return <Login setToken={setToken} />
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Login setToken={setToken}/>} >
          </Route>
          <Route exact path="/forgot-password" element={<ForgotPassword/>} >
          </Route>
          <Route exact path="/validation" element={<Validation/>} >
          </Route>
          <Route exact path="/change-password" element={<ChangePassword/>} >
          </Route>
          <Route exact path="/success" element={<SuccessLogin/>} >
          </Route>
          <Route path={'*'} element={<Login setToken={setToken}/>} />
        </Routes>
      </Router>
    )
  }
  
  const logout = () => {
    localStorage.removeItem('token');
    setToken(false);
  };

  return (
    <div className="App">
       <Router>
                   
      <SideHeader></SideHeader>
      <NavBar></NavBar>
      <Button onClickCapture={logout} className="text-end">Cerrar</Button>

        <div className="main home" >
            <div className="wrapper-height">
            <Routes>
                <Route exact path="/" element={<Dashboard/>} >
                </Route>
                <Route exact path="/dashboard" element={<Dashboard/>} >
                </Route>
                <Route path="/notas" element={<Notas/>} >
                </Route>
                <Route path={'*'} element={<Error404/>} />
            </Routes>

           
                      
                   
            </div>
                    
            <Footer></Footer>
          </div>
        
          
            </Router>
    </div>
  );
}

export default App;
