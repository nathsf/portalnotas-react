import React, { useState } from "react";

//import react pro sidebar components
import {
ProSidebarProvider,
  Menu,
  MenuItem,
  Sidebar,
} from "react-pro-sidebar";

//import icons from react icons
// import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,

  
} from "react-icons/fi";
import logo from '../../assets/img/logo-blanco.png'

import { RiPencilLine } from "react-icons/ri";
import { BiChevronsRight, BiChevronsLeft, BiCog } from "react-icons/bi";
import "./header.css";

const SideHeader = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(true);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };



  return (
    <>
      <div id="header" bg="dark" variant="dark">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebarProvider >
          <Sidebar collapsed={menuCollapse} >
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              {/* <div>{menuCollapse ? " " : "Portal de Notas"}</div> */}
              <img src={menuCollapse ? " " : logo } className="logo-side"  />
              <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <BiChevronsRight /> : <BiChevronsLeft />}
            </div>
            </div>
           
          
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Inicio
              </MenuItem>
              
              <MenuItem icon={<RiPencilLine />}>Registro de Notas</MenuItem>
              
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
    </>
  );
};

export default SideHeader;
