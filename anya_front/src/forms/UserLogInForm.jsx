import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Grid, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


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
            sx={{ padding: '10px' }}
        >
            <Grid 
                container 
                spacing={4}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Grid item xs={8} sx={{}}>
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
                    <FormControl sx={{}} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            noValidate
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </Grid>
                
            </Grid>
        </Box>
    );
}

export default UserLogInForm;