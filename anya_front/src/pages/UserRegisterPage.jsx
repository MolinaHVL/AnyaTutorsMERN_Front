import Box from "@mui/material/Box";
import Button from "@mui/material/Button"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import Typography from "@mui/material/Typography";
import UserRegisterForm from "../forms/UserRegisterForm";


const UserRegisterPage = () => {

    //Hooks para manejar el estado del error del form
    const [error, setError] = useState('')

    //variable clave para navegar por las paginas
    const navigate = useNavigate();

    //Autenticación de firebase
    const handleLogIn = async (submit) => {
        let message = ""
        try {
            if (submit.password !== submit.confirmPassword) {
                setError('las contraseñas no coinciden, favor de verificar')
                return
            }
            await createUserWithEmailAndPassword(getAuth(), submit.email, submit.password)
            navigate('/student')
        } catch (e) {
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

        <Box container sx={{
            display: "static",
            width: "50%",
            marginX: "20%",
            marginY: "5%",
            padding: "5%",
            paddingTop: "2%",
            background: "White",
            color: "white",
            opacity: "0.9",
        }}>
            <Typography fontSize={"24px"} color={"Black"}>Ingresa tus credenciales:</Typography>
            {error && <Typography sx={{ color: "#000" }}>{error}</Typography>}
            <UserRegisterForm onSubmit={handleLogIn} />
            <Button
                variant='outlined'
                form='user-form'
                type='submit'
                children='Log in'
            />
        </Box>

    );
}

export default UserRegisterPage;