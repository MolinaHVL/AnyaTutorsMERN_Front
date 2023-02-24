import Box from "@mui/material/Box";
import Button from "@mui/material/Button"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import UserForm from "../forms/UserForm";
import Typography from "@mui/material/Typography";


const UserLogPage = () => {

    //Hooks para manejar el estado del error del form
    const [error, setError] = useState('')

    //variable clave para navegar por las paginas
    const navigate = useNavigate();

    //Autenticación de firebase
    const handleLogIn = async (submit) => {
        try {
            await signInWithEmailAndPassword(getAuth(), submit.email, submit.password)
            navigate('/student')
        } catch (e) {
            setError(e.message)
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

            {error && <Typography sx={{ color: "#000" }}>{error}</Typography>}
            <UserForm onSubmit={handleLogIn} />
            <Button
                variant='outlined'
                form='user-form'
                type='submit'
                children='Log in'
            />
        </Box>

    );
}

export default UserLogPage;