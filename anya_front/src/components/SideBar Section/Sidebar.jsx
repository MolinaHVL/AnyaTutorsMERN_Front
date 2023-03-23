import React from 'react';
import './sidebar.css';
import { useNavigate } from "react-router-dom"
import useUser from '../../hooks/useUser'


//importar imagenes =======>
import logo from '../../fotos/logo.png';

//importar iconos=======>
import { IoMdContact } from 'react-icons/io';
import { ImCalendar } from 'react-icons/im';
import { CiPower } from "react-icons/ci";
import { IoLanguageOutline } from 'react-icons/io5';
import { IoCardOutline } from 'react-icons/io5';
import { IoHelpCircleOutline } from "react-icons/io5";

//importar firebase =======>
import { getAuth, signOut } from 'firebase/auth';



const Sidebar = () => {

  //custom hook para saber si el usuario esta logeado
  const { user } = useUser();
  const auth = getAuth()

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/AnyaTutorsMERN_Front/userLogIn')
  }

  const handleLogout = async () => {
    await signOut(auth)
      .then(() => {
        navigate('/AnyaTutorsMERN_Front')
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }

  return (
    <div className='sideBar grid'>

      <div className='logoDiv flex'>

        <img src={logo} alt="mage name" id='log' />
        <h2>AnyaTutors.</h2>
      </div>

      <div className="menuDiv">
        <h3 className='divTitle'>
          Menu
        </h3>

        <ul className='menuLists grid'>
          <li className='listItem'>

            {user && <a href='#top' className='menuLink flex'>
              <IoMdContact className='icon' />
              <span className='smallText'>
                Mi cuenta
              </span>
            </a>}
          </li>

          <li className='listItem'>

            {user && <a href='#top' className='menuLink flex'>
              <ImCalendar className='icon' />
              <span className='smallText'>
                Tutorias
              </span>
            </a>}
          </li>

          <li className='listItem'>
            {user
              ?
              <a href='#top' className='menuLink flex' onClick={handleLogout}>
                <CiPower className='icon' />
                <span className='smallText'>
                  Cerrar sesión
                </span>
              </a>
              :
              <a href='#top' className='menuLink flex' onClick={handleLogin}>
                <CiPower className='icon' />
                <span className='smallText'>
                  Iniciar sesión
                </span>
              </a>
            }

          </li>

        </ul>
      </div>

      {user && <div className="settingsDiv">
        <h3 className='divTitle'>
          Configuracion
        </h3>

        <ul className='menuLists grid'>
          <li className='listItem'>

            <a href='#top' className='menuLink flex'>
              <IoLanguageOutline className='icon' />
              <span className='smallText'>
                Cambiar idioma
              </span>
            </a>
          </li>

          <li className='listItem'>

            <a href='#top' className='menuLink flex'>
              <IoCardOutline className='icon' />
              <span className='smallText'>
                Tarjetas
              </span>
            </a>
          </li>

        </ul>
      </div>}

      <div className='sideBarCard'>
        <IoHelpCircleOutline className="icon" />
        <div className='cardContent'>
          <div className='circle1'></div>
          <div className='circle2'></div>

          <h3>¿Necesitas ayuda?</h3>
          <p>Si tienes problemas con AnyaTutors, comuniquese con nosotros si tienes mas preguntas</p>
          <button className='btn'>Ayuda</button>

        </div>
      </div>

    </div>

  )

}
export default Sidebar;