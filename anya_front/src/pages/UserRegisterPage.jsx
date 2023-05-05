//MaterialUI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Stack from "@mui/material/Stack";
import { Link } from 'react-router-dom';
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
import { saveStudent } from "../api/StudentsAPI";
import Copyright from "../components/Copyright";

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
            // Get the user object after creating a user with email and password
            const userCredential = await createUserWithEmailAndPassword(getAuth(), submit.email, submit.password);
            const user = userCredential.user;

            // Get the UID of the recently created user
            const uid = user.uid;

            // Pass the UID along with the rest of the user info to saveStudent function
            await saveStudent({ ...submit, uid });

            navigate('/AnyaTutorsMERN_Front/student');



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
            paddingX: "5%",
            paddingTop: "7%",
            paddingBottom: "5%",
            color: "white",
            opacity: "0.9",
            borderRadius: "15px",
            width: "550px", // Ancho fijo en píxeles
            '@media screen and (max-width: 600px)': { // Ancho del 100% para pantallas más pequeñas
                width: "100%",
            }
        }}>
            <Typography fontSize={"25px"} marginBottom={"15px"} color={"Black"} fontFamily={'Poppins'} fontWeight={'bold'}>
                Registro de cuenta
            </Typography>

            {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
            <UserRegisterForm onSubmit={handleLogIn} setPassword={setPassword} setError={setError} />
            {password &&
                <Stack direction={'column'} style={{ display: "flex", width: "100%", paddingLeft: "75px" }} paddingBottom={'15px'}>
                    <Stack direction={'row'}>
                        {hasCapitalLetter ? (
                            <CheckCircleIcon sx={{ color: "green", mr: 1 }} />
                        ) : (
                            <CancelIcon sx={{ color: "red", mr: 1 }} />
                        )}
                        <Typography sx={{
                            fontSize: "14px", fontFamily: "Poppins", fontWeight: "bold",
                            color: hasCapitalLetter ? "green" : "red"
                        }}> Mínimo una Mayúscula </Typography>
                    </Stack>
                    <Stack direction={'row'}>
                        {hasNumbers ? (
                            <CheckCircleIcon sx={{ color: "green", mr: 1 }} />
                        ) : (
                            <CancelIcon sx={{ color: "red", mr: 1 }} />
                        )}
                        <Typography sx={{ fontSize: "14px", fontFamily: "Poppins", fontWeight: "bold", color: hasNumbers ? "green" : "red" }}> Mínimo un Número </Typography>
                    </Stack>
                    <Stack direction={'row'}>
                        {hasSpecialSymbol ? (
                            <CheckCircleIcon sx={{ color: "green", mr: 1 }} />
                        ) : (
                            <CancelIcon sx={{ color: "red", mr: 1 }} />
                        )}
                        <Typography sx={{ fontSize: "14px", fontFamily: "Poppins", fontWeight: "bold", color: hasSpecialSymbol ? "green" : "red" }}> Mínimo un símbolo especial <u>@!#</u></Typography>
                    </Stack>
                </Stack>
            }
            <Button
                variant="contained"
                form="user-form"
                type="submit"
                children="Registrarse"
                sx={{
                    textTransform: 'none',
                    width: '80%',
                    marginTop: '20px',
                    fontSize: '16px',
                    fontFamily: 'Poppins',
                    fontWeight: 'bold',
                }}
            />

            <Box sx={{ marginTop: "20px", width: '100%' }}>
                <Button
                    component={Link}
                    to="/AnyaTutorsMERN_Front/userRegisterS1"
                    variant="text"
                    color="primary"
                    sx={{
                        textTransform: 'none',
                        textDecoration: 'none',
                        width: '40%',
                        padding: '3',
                        fontSize: '13px',
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        color: '', // Cambia el color a un tono más oscuro
                    }}
                >
                    ¿Problemas para registrarte?
                </Button>

                <Button
                    component={Link}
                    to="/AnyaTutorsMERN_Front/userLogIn"
                    variant="text"
                    color="primary"
                    sx={{
                        textTransform: 'none',
                        // textDecoration: 'underline', 
                        width: '40%',
                        padding: '3',
                        fontSize: '13px',
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        color: '', // Cambia el color a un tono más oscuro
                    }}
                >
                    Acceder a cuenta
                </Button>

                {/* <Button
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
                </Button> */}
                <Copyright />
            </Box>

        </Box>

    );
}

export default UserRegisterPage;