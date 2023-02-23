import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from "@mui/material"
import UserForm from "../forms/UserForm";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'

const LogUserModal = ({ open, onClose }) => {

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
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle>
                Ingresa tus credenciales:
            </DialogTitle>
            <DialogContent>
                {error && <p className="error">{error}</p>}
                <UserForm onSubmit={handleLogIn} />
            </DialogContent>
            <DialogActions>
                <Button
                    variant='outlined'
                    form='user-form'
                    type='submit'
                    children='Log in'
                />
            </DialogActions>
        </Dialog>
    );
}

export default LogUserModal