import Box from "@mui/material/Box";
import Button from "@mui/material/Button"
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import UserLogInForm from "../forms/UserLogInForm";
import Typography from "@mui/material/Typography";
import useUser from '../hooks/useUser'

const UserLogPage = () => {

    const { user } = useUser();

    //variable clave para navegar por las paginas
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/AnyaTutorsMERN_Front/student")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    //Hooks para manejar el estado del error del form
    const [error, setError] = useState('')

    //Autenticación de firebase
    const handleLogIn = async (submit) => {
        try {
            await signInWithEmailAndPassword(getAuth(), submit.email, submit.password)
                .then(() => {
                    navigate('/AnyaTutorsMERN_Front/student')
                })
        } catch (e) {
            let message = ""

            switch (e.message) {
                case "Firebase: Error (auth/invalid-email).":
                    message = "Direccion de e-mail invalida, favor de cambiarla"
                    break;
                case "Firebase: Error (auth/user-not-found).":
                    message = "El correo proporcionado no pertenece a ningun usuario"
                    break;
                case "Firebase: Error (auth/wrong-password).":
                    message = "Contraseña incorrecta, favor de verificar"
                    break;
                default:
                    message = e.message
            }
            setError(message)
        }
    }

    return (
        <Box
            sx={{
                backgroundColor: 'white',
                display: "static",
                marginX: "auto",
                marginY: "5%",
                paddingX: "5%",
                paddingY: "20%",
                color: "white",
                opacity: "0.9",
                borderRadius: "15px",
                width: "350px", // Ancho fijo en píxeles
                '@media screen and (max-width: 600px)': { // Ancho del 100% para pantallas más pequeñas
                    width: "100%",
                }
            }}
        >
            <Typography fontSize={"24px"} color={"Black"}>Inicio de Sesión</Typography>
            {error && <Typography sx={{ color: "#000" }}>{error}</Typography>}
            <UserLogInForm onSubmit={handleLogIn} />
            <Button
                variant='contained'
                form='user-form'
                type='submit'
                children='Inicio de Sesión'
                style={{marginTop: '15px'}}
            />

            <Typography fontSize={"15px"} color={"Black"}>Inicio de Sesión</Typography>
        </Box>


    );
}

export default UserLogPage;