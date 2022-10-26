import React from "react";
import Dashboard from './views/Dashboard'
import Footer from "./layout/footer";
export default function Main() {
    return (
      <>

        <div className="main pt-3" >
          <div className="wrapper-height">
          <Dashboard></Dashboard>
          </div>
                   
                   <Footer></Footer>
        </div>
        
      </>
      
    );
  }