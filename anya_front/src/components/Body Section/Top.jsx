import React from 'react';
import '../../App.css';

//Importar iconos 
import { IoSearch } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import useUser from '../../hooks/useStudent'

//importar imagen 

const Top = () => {

  const { student } = useUser();

  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Bienvenido Estudiante</h1>
          <p>Hola {student && student.nombre}</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Barra de busqueda" />
          <IoSearch className='icon' />

        </div>

        <div className="adminDiv flex">
          <IoSchoolOutline className='icon' />
          <IoNotificationsOutline className='icon' />

          <div className="adminImage">
            {student && <img src={student.picture} alt='Estudiante' id='estu' />}
          </div>
        </div>

      </div>

      {/* <div className="cardSection flex">
        <div className="rightCard flex">
          <div className='textCont'>
            <div className='circle3'></div>
            <div className='circle4'></div>
          </div>

          {student
            ?
            <h1>Resuelve tus dudas con AnyaTutors</h1>
            :
            <h1>Por favor inicia Sesión</h1>
          }


        </div>


      </div> */}
    </div>
  )

}
export default Top;