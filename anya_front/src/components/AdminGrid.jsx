import React from 'react';
import '../App.css';


//Importar estilo de botones 
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom"


const AdminGrid = () => {

    const navigate = useNavigate()

    return (
        <div className='listingSection'>

            <div className="heading flex">

            </div>

            <div className="secContainer flex">
                <div className="singleItemAdmin">



                    <img src={"https://static.vecteezy.com/system/resources/previews/001/330/263/original/stock-market-graph-trading-chart-for-business-and-finance-free-vector.jpg"} alt=' ' />
                    <h3>Estadisticas</h3>
                    <p>En este apartado se encuentran toda la informacion sobre las visualizaciones de la aplicacion</p>
                    <Button variant="contained" color="secondary">Ingresar</Button>

                </div>

                <div className="singleItemAdmin">


                    <img src={"https://th.bing.com/th/id/R.843df3f3cfb78f3b8a64848d09c6f9ab?rik=xSvAz9vbfj7ZIA&riu=http%3a%2f%2fblogs.udima.es%2feducatic%2fwp-content%2fuploads%2f2019%2f04%2fGettyImages-905256672-e1554991531253.jpg&ehk=3lPN1j4WiImRpjaDsVN4uDg96%2bkb%2ftKGKoBYUcQILAM%3d&risl=&pid=ImgRaw&r=0"} alt=' ' />
                    <h3>Maestros</h3>
                    <p>En este apartado se encuentra toda la informacion de los maestros registrados</p>

                    <Button variant="contained" onClick={() => { navigate("/AnyaTutorsMERN_Front/ListTeachers") }} color="secondary">Ingresar</Button>
                </div>

                <div className="singleItemAdmin">



                    <img src={"https://www.stratedu.com/wp-content/uploads/2018/11/Habilidades-necesarias-para-preparar-a-los-estudiantes-para-el-futuro-del-trabajo-startedu.jpg"} alt=' ' width={"300px"} height={"200px"} />
                    <h3>Estudiantes</h3>
                    <p>En este apartado se encuentra toda la informacion de los estudiantes registrados</p>
                    <Button variant="contained" onClick={() => { navigate("/AnyaTutorsMERN_Front/ListStudents") }} color="secondary">Ingresar</Button>
                </div>
                <div className="singleItemAdmin">

                    <img src={"https://boast.io/wp-content/uploads/2021/01/15-75-customer-feedback-questions.jpg"} alt=' ' />
                    <h3>Solicitudes de ayuda</h3>
                    <p>En este apartado se encuentran las solicitudes de ayuda, quejas o sugerencias de los usuarios</p>
                    <Button variant="contained" color="secondary">Ingresar</Button>


                </div>


            </div>

        </div>
    )

}
export default AdminGrid;