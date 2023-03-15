import React, { useState, useEffect } from 'react';
import './styl.css';
import { useNavigate } from "react-router-dom"
import luna from "../../fotos/Moon2.png";
import mountainFront from "../../fotos/mountains_front.png";
import mountainBack from "../../fotos/mountains_behind.png";
import stars from "../../fotos/stars.png";


const Index = () => {
    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setScrollValue(window.scrollY);
        }

        // window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigate = useNavigate()

    return (
        <>
            <header>
                <a href="#j" className="logo">AnyaTutors</a>
            </header>
            <section>
                <img src={stars} alt="img" id="stars" style={{ left: scrollValue * 0.25 + 'px' }} type="image/png" />
                <img src={mountainBack} alt="img" id="mountains_behind" style={{ top: scrollValue * 0.5 + 'px' }} type="image/png" />
                <img src={luna} alt="img" id="moon" style={{ top: 100 + scrollValue * 1.5 + 'px' }} type="image/png" />
                <img src={mountainFront} alt="img" id="mountains_front" style={{ top: scrollValue * 0 + 'px' }} type="image/png" />
                <h2 id="text" style={{ marginLeft: scrollValue * 6 + 'px', marginTop: scrollValue * 1.5 + 'px' }}>Bienvenidos</h2>
                <button onClick={() => navigate('/AnyaTutorsMERN_Front/role')} className="btn" id="bt" style={{ marginTop: scrollValue * 1.5 + 'px' }}>Registrarse</button>
                <button onClick={() => navigate('/UserLogIn')} className="btn" alt="img" id="bt2" style={{ marginTop: scrollValue * 1.5 + 'px' }}>Iniciar sesion</button>

            </section>
            <div className="sec" id="sec">
                <h2>Sobre nosotros</h2>
                <p>El proyecto Anya Tutors consiste en el desarrollo de una aplicación web enfocada a ser una red de asesorías orientada al ámbito profesional,
                    la cual permita a los usuarios obtener ayuda de profesionistas cualificados.
                </p>
            </div>
        </>
    );
}

export default Index;




