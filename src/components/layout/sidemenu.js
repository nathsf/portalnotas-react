import React, { useState } from "react";
import { useRef } from "react";
import {
  Link
} from "react-router-dom";
//import react pro sidebar components
import {
  ProSidebarProvider,
  Menu,
  MenuItem,
  Sidebar,
} from "react-pro-sidebar";
import OutsideClick from "./outsideClick";

import {
  FiHome,
  FiLogOut,
} from "react-icons/fi";
import logo from '../../assets/img/logo-blanco.png'

import { RiPencilLine } from "react-icons/ri";
import { BiChevronsRight, BiChevronsLeft, BiCog } from "react-icons/bi";
import "./header.css";

const SideHeader = () => {
  const [activePage, setActivePage] = useState(null);

  function handleActive(event) {
    if (!event.target.classList.value.includes("active")) {
      event.target.classList.toggle('active');
      if (activePage)
        activePage.classList.remove("active");
      setActivePage(event.target);
    }
  }

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(true);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  // const outsideClick = setMenuCollapse(false);

  const boxRef = useRef(null);
  const boxOutsideClick = OutsideClick(boxRef);


  return (
    <>
      <div id="header" bg="dark" variant="dark">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebarProvider >
          <Sidebar collapsed={menuCollapse} ref={boxRef} >
            {boxOutsideClick ? " " : " "}
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <img src={menuCollapse ? " " : logo} className="logo-side" />
              <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
                {menuCollapse ? <BiChevronsRight /> : <BiChevronsLeft />}
              </div>
            </div>


            <Menu iconShape="square">
              <Link to="/dashboard" className="text-white" onClick={handleActive}>
                <MenuItem active={window.location.pathname === "/dashboard" || window.location.pathname === "/"  } icon={<FiHome />}>
                  Home
                </MenuItem>
              </Link>
              <Link to="/notas" className="text-white" onClick={handleActive}>
                <MenuItem active={window.location.pathname === "/notas"} icon={<RiPencilLine />}>Registro de Notas</MenuItem>
              </Link>

            </Menu>
            <Menu iconShape="square" className="menu-footer">
              <MenuItem icon={<BiCog />}>Ajustes</MenuItem>
              <MenuItem icon={<FiLogOut />}>Cerrar sesión</MenuItem>
            </Menu>
          </Sidebar>
          {/* <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter> */}
        </ProSidebarProvider>
      </div>
      {/* <div className="desc">
        {boxOutsideClick ? "outside click" : "inside click"}
      </div> */}
    </>
  );
};

export default SideHeader;
