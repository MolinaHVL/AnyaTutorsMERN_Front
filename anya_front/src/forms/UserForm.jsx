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

    const { control, handleSubmit, reset } = useForm({
        defaultValues: defaultValues,
        resolver: yupResolver(UserFormSchema),
        mode: 'all',
    })

    return (
        <Box
            id='user-form'
            component='form'
            onReset={() => reset(defaultValues)}
            onSubmit={handleSubmit()}

        >
            <Grid container spacing={4}>
                <Grid item xs={8}>
                    <Controller
                        control={control}
                    >

                    </Controller>
                </Grid>
            </Grid>
        </Box>
    );
}

export default UserForm;