import React from 'react';
import '../App.css';
import { useNavigate } from "react-router-dom"
import useUser from '../hooks/useStudent'
import { Link } from 'react-router-dom';

//importar imagenes =======>
import logo from '../fotos/logo.png';

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
  const { student } = useUser();
  const auth = getAuth()

  const navigate = useNavigate();

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
            {student && (
              <Link to='/AnyaTutorsMERN_Front/profile' className='menuLink flex'>
                <IoMdContact className='icon' />
                <span className='smallText'>
                  Mi cuenta
                </span>
              </Link>
            )}
          </li>

          <li className='listItem'>
            {student && student.role === "Admin" && (
              <Link to='/AnyaTutorsMERN_Front/admin' className='menuLink flex'>
                <IoMdContact className='icon' />
                <span className='smallText'>
                  Admin
                </span>
              </Link>
            )}
          </li>

          <li className='listItem'>
            {student && student.role === "Estudiante" && (
              <Link to='#top' className='menuLink flex'>
                <ImCalendar className='icon' />
                <span className='smallText'>
                  Tutorias
                </span>
              </Link>
            )}
          </li>

          <li className='listItem'>
            {student ? (
              <Link to='#top' className='menuLink flex' onClick={handleLogout}>
                <CiPower className='icon' />
                <span className='smallText'>
                  Cerrar sesión
                </span>
              </Link>
            ) : (
              <Link to='/AnyaTutorsMERN_Front/userLogIn' className='menuLink flex'>
                <CiPower className='icon' />
                <span className='smallText'>
                  Iniciar sesión
                </span>
              </Link>
            )}
          </li>


          <li className='listItem'>
            <Link to='/AnyaTutorsMERN_Front/chat' className='menuLink flex'>
              <IoLanguageOutline className='icon' />
              <span className='smallText'>
                Chat Global
              </span>
            </Link>
          </li>

          <li className='listItem'>
            {student && student.role === "Estudiante" &&
              <Link to='/AnyaTutorsMERN_Front/studentCourses' className='menuLink flex'>
                <IoCardOutline className='icon' />
                <span className='smallText'>
                  Mis cursos
                </span>
              </Link>}

            {student && student.role === "Maestro" && <Link to='/AnyaTutorsMERN_Front/teacher' className='menuLink flex'>
              <IoCardOutline className='icon' />
              <span className='smallText'>
                Mis cursos
              </span>
            </Link>}
          </li>
        </ul>
      </div>


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
  );
}
export default Sidebar;