import React from 'react';
import '../../App.css';

//importar iconos 
// import { IoArrowForwardSharp } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";


//importar imagenes - metodo cuando las imagenes son estaticas 
import mate from "../../fotos/mate.jpg";
import ingles from "../../fotos/Ingles.jpg";
import conta from "../../fotos/Contabilidad.jpg";
import prog from "../../fotos/Programacion.jpg";
import c from "../../fotos/contab.jpg";
import m from "../../fotos/mate2.jpg";
import p from "../../fotos/nutricion.jpg";
import i from "../../fotos/idioma.jpg";
import n from "../../fotos/nutri.jpg";
import con from "../../fotos/conta.jpg";
import ma from "../../fotos/mate3.jpg";
import idi from "../../fotos/idio.jpg";
import le from "../../fotos/profe.jpg";


const TeacherList = () => {
  return (
    <div className='listingSection'>

      <div className="heading flex">
        <h1>Maestros</h1>
        {/* <button className='btn flex'>
        Siguiente <IoArrowForwardSharp className='icon'/>
      </button> */}
      </div>

      <div className="secContainer flex">
        <div className="singleItem">

          <IoHeartSharp className='icon' id='cor' />

          <img src={mate} alt=' ' />
          <h3>Alma</h3>
          <p>Profesora de matematicas y fisica</p>

        </div>

        <div className="singleItem">

          <IoHeartSharp className='icon' id='cor' />

          <img src={ingles} alt=' ' />
          <h3>Norma</h3>
          <p>Profesora de ingles para todos los niveles </p>

        </div>

        <div className="singleItem">

          <IoHeartSharp className='icon' id='cor' />

          <img src={conta} alt=' ' />
          <h3>Enrique</h3>
          <p>Profesor de gestion contable</p>

        </div>
        <div className="singleItem">

          <IoHeartSharp className='icon' id='cor' />

          <img src={c} alt=' ' />
          <h3>Ana</h3>
          <p>Profesora de administracion de proyectos</p>

        </div>

        <div className="singleItem">

          <IoHeartSharp className='icon' id='cor' />

          <img src={prog} alt=' ' />
          <h3>Edson</h3>
          <p>Profesor de programacion</p>

        </div>

        <div className="singleItem">

          <IoHeartSharp className='icon' id='cor' />

          <img src={m} alt=' ' />
          <h3>Jonathan</h3>
          <p>Profesor de matematicas y fisica</p>

        </div>
        <div className="singleItem">

          <IoHeartSharp className='icon' id='cor' />

          <img src={p} alt=' ' />
          <h3>Beatriz</h3>
          <p>Profesora de programacion avanzada</p>

        </div>
        <div className="singleItem">

          <IoHeartSharp className='icon' id='cor' />

          <img src={i} alt=' ' />
          <h3>Karen</h3>
          <p>Profesora de ingles</p>

        </div>
        <div className="singleItem">

          <IoHeartSharp className='icon' id='cor' />

          <img src={n} alt=' ' />
          <h3>Jose</h3>
          <p>Profesor de nutricion</p>

        </div>
        <div className="singleItem">

          <IoHeartSharp className='icon' id='cor' />

          <img src={con} alt=' ' />
          <h3>Alejandro</h3>
          <p>Profesor de contabilidad</p>

        </div>

        <div className="singleItem">

          <IoHeartSharp className='icon' id='cor' />

          <img src={ma} alt=' ' />
          <h3>Carlos</h3>
          <p>Profesor de fisica</p>

        </div>

        <div className="singleItem">

          <IoHeartSharp className='icon' id='cor' />

          <img src={idi} alt=' ' />
          <h3>Antonieta</h3>
          <p>Profesora de lenguas extranjeras</p>

        </div>

        <div className="singleItem">

          <IoHeartSharp className='icon' id='cor' />

          <img src={le} alt=' ' />
          <h3>Maday</h3>
          <p>Profesora de idiomas</p>

        </div>
      </div>

    </div>
  )

}
export default TeacherList;