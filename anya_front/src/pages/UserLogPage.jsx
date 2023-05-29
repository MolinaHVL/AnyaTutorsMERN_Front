import Box from "@mui/material/Box";
import Button from "@mui/material/Button"
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import UserLogInForm from "../forms/UserLogInForm";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import useUser from '../hooks/useStudent'

const UserLogPage = () => {
    const { student } = useUser();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    useEffect(() => {
        if (student) {
            if (student.role === "Estudiante") {
                navigate('/AnyaTutorsMERN_Front/student');
            } else if (student.role === "Maestro") {
                navigate('/AnyaTutorsMERN_Front/teacher');
            } else if (student.role === "Admin") {
                navigate('/AnyaTutorsMERN_Front/admin');
            }
        }
    }, [student, navigate]);

    const handleLogIn = async (submit) => {
        try {
            await signInWithEmailAndPassword(getAuth(), submit.email, submit.password);
        } catch (e) {
            let message = '';

            switch (e.message) {
                case 'Firebase: Error (auth/invalid-email).':
                    message = 'Direccion de e-mail invalida, favor de cambiarla';
                    break;
                case 'Firebase: Error (auth/user-not-found).':
                    message = 'El correo proporcionado no pertenece a ningun usuario';
                    break;
                case 'Firebase: Error (auth/wrong-password).':
                    message = 'Contraseña incorrecta, favor de verificar';
                    break;
                default:
                    message = e.message;
            }
            setError(message);
        }
    };

    const theme = createTheme({
        typography: {
            fontFamily: 'Poppins, Arial, sans-serif',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    backgroundColor: 'white',
                    display: "static",
                    marginX: "auto",
                    marginY: "5%",
                    paddingX: "0%", //Antes 5%
                    paddingTop: "7%",
                    paddingBottom: "5%",
                    color: "white",
                    opacity: "0.9",
                    borderRadius: "15px",
                    width: "550px", // Ancho fijo en píxeles
                    '@media screen and (max-width: 600px)': { // Ancho del 100% para pantallas más pequeñas
                        width: "100%",
                    }
                }}
            >
                <Typography fontSize={"25px"} marginBottom={"15px"} color={"Black"} fontFamily={'Poppins'} fontWeight={'bold'}>
                    Inicio de sesión
                </Typography>

                {/* Para agregar el icono del Inicio de sesión quitar de comentario el código de abajo */}
                {/* <Typography marginTop={'10px'}>
                <AccountCircleIcon color="primary" sx={{ fontSize: 80, color: ''}} />
            </Typography> */}

                {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
                <UserLogInForm onSubmit={handleLogIn} />
                <Box sx={{ marginTop: "10px", width: '100%' }}>
                    <Button
                        variant="contained"
                        form="user-form"
                        type="submit"
                        children="Iniciar sesión"
                        sx={{
                            textTransform: 'none',
                            width: '80%',
                            fontSize: '16px',
                            fontFamily: 'Poppins',
                            fontWeight: 'bold',
                        }}
                    />
                </Box>
                <Box sx={{ marginTop: "20px", width: '100%' }}>
                    <Button
                        component={Link}
                        to="/AnyaTutorsMERN_Front"
                        variant="text"
                        color="primary"
                        sx={{
                            textTransform: 'none',
                            textDecoration: 'none',
                            width: '40%',
                            padding: '3',
                            fontSize: '14px',
                            fontFamily: 'Poppins',
                            fontWeight: 'bold',
                            color: '', // Cambia el color a un tono más oscuro
                        }}
                    >
                        ¿Olvidaste tu contraseña?
                    </Button>
                    <Button
                        component={Link}
                        to="/AnyaTutorsMERN_Front/role"
                        variant="text"
                        color="primary"
                        sx={{
                            textTransform: 'none',
                            // textDecoration: 'underline', 
                            width: '40%',
                            padding: '3',
                            fontSize: '15px',
                            fontFamily: 'Poppins',
                            fontWeight: 'bold',
                            color: '', // Cambia el color a un tono más oscuro
                        }}
                    >
                        Registrar cuenta
                    </Button>
                </Box>
                <Button
                    component={Link}
                    to="/AnyaTutorsMERN_Front"
                    variant="text"
                    color="primary"
                    sx={{
                        textTransform: 'none',
                        textDecoration: 'none',
                        width: '80%',
                        fontSize: '13px',
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        color: '#333', // Cambia el color a un tono más oscuro
                        marginTop: '20px',
                    }}
                >
                    Copyright © AnyaTutors 2023.
                </Button>
            </Box>
        </ThemeProvider>
    );
}

export default UserLogPage;