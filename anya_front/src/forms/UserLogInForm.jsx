import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Grid, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';


const UserLogInForm = ({ onSubmit }) => {

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const defaultValues = {
        email: '',
        password: '',
    }

    const UserFormSchema = yup.object().shape({
        email: yup.string().required('Necesitas ingresar un email'),
        password: yup.string().required('Necesitas ingresar una contraseña'),
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
            sx={{ paddingTop: '12px', paddingBottom: '20px' }}
        >
            <Grid
                container
                spacing={3}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Grid item xs={8} sx={{width: '80%',}}>
                    <Controller
                        control={control}
                        name='email'
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label='Email'
                                variant='outlined'
                                fullWidth
                                InputProps={{
                                    style: {
                                        fontFamily: 'Poppins',
                                        fontWeight: 'Bold',
                                    },
                                    endAdornment: (
                                        <InputAdornment position="end">
                                          <EmailRoundedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                error={!!fieldState.error}
                                helperText={
                                    <Typography
                                        sx={{
                                            fontFamily: 'Poppins', // Agrega el nombre de tu nueva fuente aquí
                                            fontWeight: 'bold',
                                            fontSize: '13px',
                                            color: '', // Puedes cambiar el color aquí
                                        }}
                                    >
                                        {fieldState.error?.message}
                                    </Typography>   
                                }
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={8} sx={{width: '80%'}}>
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
                                helperText={
                                    <Typography
                                        sx={{
                                            fontFamily: 'Poppins', // Agrega el nombre de tu nueva fuente aquí
                                            fontWeight: 'bold',
                                            fontSize: '13px',
                                            color: '', // Puedes cambiar el color aquí
                                        }}
                                    >
                                        {fieldState.error?.message}
                                    </Typography>   
                                }
                                InputProps={{
                                    style: {
                                        fontFamily: 'Poppins',
                                        fontWeight: 'Bold',
                                    },
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

export default UserLogInForm;