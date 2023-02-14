import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { Box, Grid, TextField } from '@mui/material'

const UserForm = () => {

    const defaultValues = {
        email: '',
        password: '',
    }

    const UserFormSchema = yup.object().shape({
        email: yup.string().required('necesitas un email'),
        password: yup.string().required('necesitas una contraseña'),
    })

    return (
        <h1>hey</h1>
    );
}

export default UserForm;