import './scss/styles.js';
import './App.css';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Switch
} from "react-router-dom";
import useToken from './components/login/useToken'

import SideHeader from './components/layout/sidemenu';
import NavBar from './components/layout/header';
import Footer from './components/layout/footer.js';
// import Main from './components/main.js';

import Dashboard from './components/views/dashboard/Dashboard';
import Notas from './components/views/notas/notas';
import Error404 from './components/views/Error404.js';
import Login from './components/login/login.js';
import { Button } from 'react-bootstrap';



function App() {
  const { token, setToken } = useToken();
  useEffect(() => {
    document.title = 'Portal de Notas';
  });

  if(!token) {
    return <Login setToken={setToken} />
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
