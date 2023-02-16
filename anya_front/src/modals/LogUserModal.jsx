import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import UserForm from "../forms/UserForm";

const LogUserModal = ({ open, onClose, onSubmit }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle>
                Ingresa tus credenciales:
            </DialogTitle>
            <DialogContent>
                <UserForm onSubmit={onSubmit} />
            </DialogContent>
            <DialogActions>
                <Button
                    variant='outlined'
                    form='user-form'
                    type='submit'
                    children='Log in'
                    onClick={onClose}
                />
            </DialogActions>
        </Dialog>
    );
}

export default LogUserModal