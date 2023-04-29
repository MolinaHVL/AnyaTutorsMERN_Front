import React from 'react';
import './listing2.css';

//importar imagenes - metodo cuando las imagenes son estaticas 
import estad from "../../../fotos/estad.jpg";
import maestros from "../../../fotos/maestros.jpg";
import estud from "../../../fotos/estud.jpg";
import ayuda from "../../../fotos/ayuda.jpg";


//Importar estilo de botones 
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom"



const Listing = () => {

  const navigate = useNavigate()

  return (
    <div className='listingSection'>

      <div className="heading flex">

      </div>

      <div className="secContainer flex">
        <div className="singleItemAdmin">



          <img src={estad} alt=' ' />
          <h3>Estadisticas</h3>
          <p>En este apartado se encuentran toda la informacion sobre las visualizaciones de la aplicacion</p>
          <Button variant="contained" color="secondary">Ingresar</Button>

        </div>

        <div className="singleItemAdmin">


          <img src={maestros} alt=' ' />
          <h3>Maestros</h3>
          <p>En este apartado se encuentra toda la informacion de los maestros registrados</p>

          <Button variant="contained" color="secondary">Ingresar</Button>
        </div>

        <div className="singleItemAdmin">



          <img src={estud} alt=' ' width={"300px"} height={"200px"} />
          <h3>Estudiantes</h3>
          <p>En este apartado se encuentra toda la informacion de los estudiantes registrados</p>
          <Button variant="contained" onClick={() => { navigate("/AnyaTutorsMERN_Front/ListStudents") }} color="secondary">Ingresar</Button>
        </div>
        <div className="singleItemAdmin">

          <img src={ayuda} alt=' ' />
          <h3>Solicitudes de ayuda</h3>
          <p>En este apartado se encuentran las solicitudes de ayuda, quejas o sugerencias de los usuarios</p>
          <Button variant="contained" color="secondary">Ingresar</Button>


        </div>


      </div>

    </div>
  )

}
export default Listing;