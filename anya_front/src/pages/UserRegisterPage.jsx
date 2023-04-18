//MaterialUI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

//React import
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

//Firebase imports
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
// import useUser from "../hooks/useUser"

//Components imports
import UserRegisterForm from "../forms/UserRegisterForm";

//API imports
// import { saveStudent } from "../api/StudentsAPI";

const UserRegisterPage = () => {

    //Hooks para saber si el usuario esta logueado
    // const { user } = useUser();

    //Hooks para manejar el estado del error del form
    const [error, setError] = useState('')

    //variable clave para navegar por las paginas
    const navigate = useNavigate();

    //verificacion de estandar de password
    const [password, setPassword] = useState('')
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasNumbers = /\d/.test(password)
    const hasSpecialSymbol = /[^\w\s]/.test(password)


    //Autenticación de firebase
    const handleLogIn = async (submit) => {
        let message = ""
        try {
            if (hasCapitalLetter === false || hasNumbers === false || hasSpecialSymbol === false) {
                setError('La contraseña no cumple con los requerimientos')
                return
            } else if (submit.password !== submit.confirmPassword) {
                setError('Las contraseñas no coinciden, favor de verificar')
                return
            }
            await createUserWithEmailAndPassword(getAuth(), submit.email, submit.password)
            navigate('/AnyaTutorsMERN_Front/student')



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
                case "Firebase: Password should be at least 6 characters (auth/weak-password).":
                    message = "La contraseña debe tener un minimo de 6 caracteres"
                    break;
                case "Firebase: Error (auth/email-already-in-use).":
                    message = "El e-mail proporcionado esta actualente en uso"
                    break;
                default:
                    message = e.message
            }
            setError(message)
        }
    }

    return (

        <Box sx={{
            backgroundColor: 'white',
            display: "static",
            marginX: "auto",
            marginY: "5%",
            padding: "5%",
            paddingTop: "2%",
            color: "white",
            opacity: "0.9",
            borderRadius: "15px",
            width: "250px", // Ancho fijo en píxeles
            '@media screen and (max-width: 600px)': { // Ancho del 100% para pantallas más pequeñas
                width: "100%",
            }
        }}>
            <Typography fontSize={"24px"} color={"Black"} paddingBottom={'10px'}>Ingresa tus credenciales:</Typography>
            {error && <Typography sx={{ color: "#000" }}>{error}</Typography>}
            <UserRegisterForm onSubmit={handleLogIn} setPassword={setPassword} setError={setError} />
            {password &&
                <Stack direction={'column'} style={{ display: "flex" }} paddingBottom={'15px'}>
                    <Stack direction={'row'}>
                        {hasCapitalLetter ? (
                            <CheckCircleIcon sx={{ color: "green", mr: 1 }} />
                        ) : (
                            <CancelIcon sx={{ color: "red", mr: 1 }} />
                        )}
                        <Typography sx={{ color: hasCapitalLetter ? "green" : "red" }}> Minimo una MAYUSCULA </Typography>
                    </Stack>
                    <Stack direction={'row'}>
                        {hasNumbers ? (
                            <CheckCircleIcon sx={{ color: "green", mr: 1 }} />
                        ) : (
                            <CancelIcon sx={{ color: "red", mr: 1 }} />
                        )}
                        <Typography sx={{ color: hasNumbers ? "green" : "red" }}> Minimo un NUMERO </Typography>
                    </Stack>
                    <Stack direction={'row'}>
                        {hasSpecialSymbol ? (
                            <CheckCircleIcon sx={{ color: "green", mr: 1 }} />
                        ) : (
                            <CancelIcon sx={{ color: "red", mr: 1 }} />
                        )}
                        <Typography sx={{ color: hasSpecialSymbol ? "green" : "red" }}> Minimo un SIMBOLO @!#  </Typography>
                    </Stack>
                </Stack>
            }
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