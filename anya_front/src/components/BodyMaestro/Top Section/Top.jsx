import React from 'react';
import './top.css';

//Importar iconos 
import { IoSearch } from "react-icons/io5";
import { GrUserAdmin} from "react-icons/gr";
import { IoNotificationsOutline } from "react-icons/io5";

//importar imagen 

import img from '../../../fotos/admi.jpg';

const Top= () => {
return(
  <div className='topSection'>
    <div className="headerSection flex">
      <div className="title">
        <h1 id="tit">Bienvenido Administrador</h1>
        <p id="tex">Hola Vanessa</p>
      </div>

      <div className="searchBar flex">
        <input type="text" placeholder="Barra de busqueda"/>
        <IoSearch className='icon'/>

      </div>

      <div className="adminDiv flex">
      <GrUserAdmin className='icon'/>
      <IoNotificationsOutline className='icon'/>

      <div className="adminImage">
        <img src={img} alt='Estudiante' id='estu'/>
      </div>
      </div>

    </div>

  </div>
)

}
export default Top;