import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { Box, Grid, TextField } from '@mui/material'


const UserLogInForm = ({ onSubmit }) => {

    const defaultValues = {
        email: '',
        password: '',
    }

    const UserFormSchema = yup.object().shape({
        email: yup.string().required('necesitas un email'),
        password: yup.string().required('necesitas una contraseña'),
    })

    const { control, handleSubmit } = useForm({
        defaultValues: defaultValues,
        resolver: yupResolver(UserFormSchema),
        mode: 'all',
    })

    return (
        <Box
            id='user-form'
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            sx={{ padding: '24px' }}
        >
            <Grid container spacing={4}>
                <Grid item xs={8}>
                    <Controller
                        control={control}
                        name='email'
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label='Email'
                                variant='outlined'
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Controller
                        control={control}
                        name='password'
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                type={'password'}
                                label='Password'
                                variant='outlined'
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default UserLogInForm;