import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import UserForm from "../forms/UserForm";
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from "react-router-dom"



const LogUserModal = ({ open, onClose }) => {

    //Hooks para manejar el estado de los campos del form
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    //variable clave para navegar por las paginas
    const navigate = useNavigate();



    //Autenticación de firebase
    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password)
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
                <UserForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
            </DialogContent>
            <DialogActions>
                <Button
                    variant='outlined'
                    form='user-form'
                    type='submit'
                    children='Log in'
                    onClick={logIn}
                />
            </DialogActions>
        </Dialog>
    );
}

export default LogUserModal