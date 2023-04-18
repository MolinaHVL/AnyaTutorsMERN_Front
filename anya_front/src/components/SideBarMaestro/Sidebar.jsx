import React from 'react';
import './sidebar.css';

//importar imagenes =======>
import logo from '../../fotos/logo.png';

//importar iconos=======>
import {AiOutlineHome} from 'react-icons/ai';
import {BsGraphUp} from 'react-icons/bs';
import { IoSchoolOutline } from "react-icons/io5";
import {FaChalkboardTeacher} from 'react-icons/fa';
import { CiPower } from "react-icons/ci";
import {IoLanguageOutline} from 'react-icons/io5';
import {IoCardOutline} from 'react-icons/io5';

const Sidebar = () => {
return(
  <div className='sideBar grid'>

  <div className='logoDiv flex'>

    <img src={logo} alt="mage name"  id='log'/>
    <h2>AnyaTutors.</h2>
  </div>

  <div className="menuDiv">
    <h3 className='divTitle'>
      Menu
    </h3>

    <ul className='menuLists grid'>
      <li className='listItem'>
        
        <a href='#top' className='menuLink flex'>
        <AiOutlineHome className='icon'/>
        <span className='smallText'>
          Inicio
        </span>
        </a>
      </li>

      <li className='listItem'>
        
        <a href='#top' className='menuLink flex'>
        <BsGraphUp className='icon'/>
        <span className='smallText'>
          Estadisticas
        </span>
        </a>
      </li>

      <li className='listItem'>
        
        <a href='#top' className='menuLink flex'>
        <IoSchoolOutline className='icon'/>
        <span className='smallText'>
          Estudiantes
        </span>
        </a>
      </li>

      <li className='listItem'>
        
        <a href='#top' className='menuLink flex'>
        <FaChalkboardTeacher className='icon'/>
        <span className='smallText'>
          Maestros
        </span>
        </a>
      </li>

      <li className='listItem'>
        
        <a href='#top' className='menuLink flex'>
        <CiPower className='icon'/>
        <span className='smallText'>
          Cerrar sesion
        </span>
        </a>
      </li>

    </ul>
  </div>

  <div className="settingsDiv">
    <h3 className='divTitle'>
      Configuracion
    </h3>

    <ul className='menuLists grid'>
      <li className='listItem'>
        
        <a href='#top' className='menuLink flex'>
        <IoLanguageOutline className='icon'/>
        <span className='smallText'>
          Cambiar idioma
        </span>
        </a>
      </li>

      <li className='listItem'>
        
        <a href='#top' className='menuLink flex'>
        <IoCardOutline className='icon'/>
        <span className='smallText'>
          Nocturno
        </span>
        </a>
      </li>

      

    </ul>
  </div>

  <div className='sideBarCard'>
  <div className='cardContent'>
    <div className='circle1'></div>
    <div className='circle2'></div>



  </div>
  </div>

  </div>
  
)

}
export default Sidebar;