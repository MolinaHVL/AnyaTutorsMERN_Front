import React, { useState, useEffect } from 'react';
import './styl.css';
import { useNavigate } from "react-router-dom"



function Index() {
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
                <img src="img_index/stars.png" alt="img" id="stars" style={{ left: scrollValue * 0.25 + 'px' }} type="image/png" />
                <img src="img_index/mountains_behind.png" alt="img" id="mountains_behind" style={{ top: scrollValue * 0.5 + 'px' }} /> type="image/png"
                <img src="img_index/Moon2.png" alt="img" id="moon" style={{ top: 100 + scrollValue * 1.5 + 'px' }} type="image/png" />
                <h2 id="text" style={{ marginLeft: scrollValue * 6 + 'px', marginTop: scrollValue * 1.5 + 'px' }}>Bienvenidos</h2>
                <a href="/role" onClick={navigate('/role')} className="btn" id="bt" style={{ marginTop: scrollValue * 1.5 + 'px' }}>Registrarse</a>
                <a href="/UserLogIn" onClick={navigate('/UserLogIn')} className="btn" alt="img" id="bt2" style={{ marginTop: scrollValue * 1.5 + 'px' }}>Iniciar sesion</a>
                <img src="img_index/mountains_front.png" alt="img" id="mountains_front" style={{ top: scrollValue * 0 + 'px' }} type="image/png" />

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




