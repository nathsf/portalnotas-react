import './scss/styles.js';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import SideHeader from './components/layout/sidemenu';
import NavBar from './components/layout/header';
// import Main from './components/main.js';
import React, { useEffect } from 'react';
import Dashboard from './components/views/dashboard/Dashboard';
import Notas from './components/views/notas/notas';
import Error404 from './components/views/Error404.js';
import Footer from './components/layout/footer.js';
function App() {
  useEffect(() => {
    document.title = 'Portal de Notas';
  });
  return (
    <div className="App">
      <Router>
      <SideHeader></SideHeader>
      <NavBar></NavBar>
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
