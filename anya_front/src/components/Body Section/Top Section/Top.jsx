import React from 'react';
import './top.css';

//Importar iconos 
import { IoSearch } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

//importar imagen 

import img from '../../../fotos/estud.jpg';

const Top= () => {
return(
  <div className='topSection'>
    <div className="headerSection flex">
      <div className="title">
        <h1>Bienvenido Estudiante</h1>
        <p>Hola Mariam</p>
      </div>

      <div className="searchBar flex">
        <input type="text" placeholder="Barra de busqueda"/>
        <IoSearch className='icon'/>

      </div>

      <div className="adminDiv flex">
      <IoSchoolOutline className='icon'/>
      <IoNotificationsOutline className='icon'/>

      <div className="adminImage">
        <img src={img} alt='Estudiante' id='estu'/>
      </div>
      </div>

    </div>

    <div className="cardSection flex">
      <div className="rightCard flex">
      <div className='textCont'>
        <div className='circle3'></div>
        <div className='circle4'></div>
        </div>  

        <h1>Resuelve tus dudas con AnyaTutors</h1>

       
       
      </div>
     

    </div>
  </div>
)

}
export default Top;