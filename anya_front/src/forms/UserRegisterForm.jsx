import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { Box, Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'


const UserRegisterForm = ({ onSubmit, setPassword, setError }) => {

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const defaultValues = {
        email: '',
        password: '',
        confirmPasswordValue: ''
    }

    const UserFormSchema = yup.object().shape({
        email: yup.string().required('necesitas un email'),
        password: yup.string().required('necesitas una contraseña'),
        confirmPassword: yup.string().required('confirma tu contraseña')
    })

    const { control, handleSubmit, watch } = useForm({
        defaultValues: defaultValues,
        resolver: yupResolver(UserFormSchema),
        mode: 'all',
    })

    const passwordValue = watch('password');
    const emailValue = watch('email')
    const confirmPasswordValue = watch('confirmPassword')

    useEffect(() => {
        setPassword(passwordValue);
        // eslint-disable-next-line
    }, [passwordValue]);

    useEffect(() => {
        setError('')
        // eslint-disable-next-line
    }, [passwordValue, emailValue, confirmPasswordValue])

    return (
        <Box
            id='user-form'
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                padding: '10px',
            }}
        >
            <Grid
                container
                spacing={4}
                direction="column"
                alignItems="center"
                justify="center"
            >
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
                <Grid item xs={8} sx={{}}>
                    <Controller
                        control={control}
                        name='password'
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label='Password'
                                type={showPassword ? 'text' : "password"}
                                variant='outlined'
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={8} sx={{}}>
                    <Controller
                        control={control}
                        name='confirmPassword'
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label='Confirm Password'
                                type={showPassword ? 'text' : "password"}
                                variant='outlined'
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />
                </Grid>
            </Grid>
        </Box>
    );

}

export default UserRegisterForm;