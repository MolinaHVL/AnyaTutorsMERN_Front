import React, { createContext, useContext, useState } from 'react';
import { Paper, Button, Grid, TextField, Step, Stepper, StepLabel, FormControl, Select, MenuItem, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Typography from "@mui/material/Typography";
import { useNavigate } from 'react-router-dom';

import { FcPanorama } from "react-icons/fc";

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { saveStudent } from '../api/StudentsAPI';


const FormContext = createContext();

const FormProvider = ({ children }) => {
    const [form, setForm] = useState({});
    return (
        <FormContext.Provider value={{ form, setForm }}>
            {children}
        </FormContext.Provider>
    );
};

const useFormData = () => useContext(FormContext);

const useStyles = makeStyles({
    fontStepper: {
        fontSize: '15px',
    },
    customStepper: {
        '& .MuiStepLabel-label': {
            fontSize: '15px',
        },
    },
    h1: {
        fontSize: 'var(--h2FontSize)',
        color: 'var(--blackColor)',
        fontWeight: 700,
    },
    btn: {
        border: '1px solid transparent',
        fontWeight: 800,
        '&:hover': {
            border: '1px solid var(--HColor)',
        },
    },
    secContainerMc: {
        width: '100%',
        margin: '1rem 0',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderTop: '2px solid #205295',
    },
    datosG: {
        marginTop: '20px',
        position: 'relative',
        // width: '600px',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '0 30px 15px 30px',
        borderRadius: '10px',
        // border: '2px solid #205295',
        background: 'var(--whiteColor)',
    },
    datosG2: {
        marginTop: '20px',
        position: 'relative',
        width: '650px',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '0 0 15px 0',
        borderRadius: '10px',
        // border: '2px solid #205295',
        background: 'var(--whiteColor)',
    },
    select: {
        fontSize: 'var(--normalFontSize)',
        width: '380px',
        fontFamily: '"Poppins", sans-serif',
        borderTop: '1px solid black',
    },
    doc: {
        fontSize: 'var(--normalFontSize)',
        width: '380px',
        fontFamily: '"Poppins", sans-serif',
        borderTop: '1px solid black',
    },
    comp: {
        color: 'black',
        fontSize: 'var(--normalFontSize)',
        width: '380px',
        marginTop: '10px',
        fontFamily: '"Poppins", sans-serif',
    },
    button: {
        width: '380px',
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 800,
        marginTop: '10px',
    },
    contra: {
        fontSize: 'var(--normalFontSize)',
        width: '380px',
        fontFamily: '"Poppins", sans-serif',
        marginTop: '20px',
    },
    check: {
        fontSize: 'var(--normalFontSize)',
        width: '380px',
        fontFamily: '"Poppins", sans-serif',
        marginTop: '20px',
        borderRadius: '5px',
        textAlign: 'center',
        backgroundColor: 'gainsboro',
    },
    h3: {
        fontSize: '1.5rem',
        padding: '.400rem 0',
    },
    contraH3: {
        fontSize: '1.5rem',
        padding: '.400rem 0',
        textAlign: 'center',
        marginTop: '10px',
        marginBottom: '3px',
        borderBottom: '1px solid black',
    },
    p: {
        fontSize: 'var(--normalFontSize)',
        textAlign: 'justify',
        marginTop: '10px',
    },
    iconos: {
        textAlign: 'center',
    },
    pic: {
        fontSize: '100px',
    },
    docH3: {
        fontSize: '1.5rem',
        padding: '.100rem 0',
        textAlign: 'center',
        marginTop: '15px',
        marginBottom: '3px',
        borderBottom: '1px solid black',
    },
    buttonsCustomized: {
        textTransform: 'none',
        width: '40%',
        fontSize: '16px',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
    },
    cajita: {
        color: 'black',
        fontSize: 'var(--normalFontSize)',
        width: '100%',
        marginTop: '10px',
        fontFamily: '"Poppins", sans-serif',
    },
});

const CssTextField = styled(TextField)(({ hasError }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: hasError ? 'red' : '#205295',
        },
        '&:hover fieldset': {
            borderColor: hasError ? 'red' : '',
        },
        '&.Mui-focused fieldset': {
            borderColor: hasError ? 'red' : '',
        },
    },
}));

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, Arial, sans-serif',
    },
});

const RegisterForm = () => {

    const navigate = useNavigate()

    const [error, setError] = useState('')
    const classes = useStyles();
    const { form, setForm } = useFormData();

    const hasCapitalLetter = /[A-Z]/.test(form.clave);
    const hasNumbers = /\d/.test(form.clave)
    const hasSpecialSymbol = /[^\w\s]/.test(form.clave)

    const handleInputChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleInputChangeForm = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        if (hasCapitalLetter === false || hasNumbers === false || hasSpecialSymbol === false) {
            setError('La contraseña no cumple con los requerimientos')
            return
        } else if (form.clave !== form.confirmarClave) {
            setError('Las contraseñas no coinciden, favor de verificar')
            return
        } else if (!form.correo) {
            setError('Falta el campo de correo')
            return
        } else if (activeStep === 1 && (!form.nombre || !form.apellidoM || !form.apellidoP || !form.fechaNac || !form.celular)) {
            setError('Faltan campos por llenar')
            return
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        setError('')
    };
    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!form.picture) {
            setError("Hace falta la foto de perfil")
            return
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(getAuth(), form.correo, form.clave);
            const user = userCredential.user;

            const uid = user.uid;

            const storage = getStorage();

            const files = [form.picture];  // The keys for each file in your state
            const urlFilesPromises = []

            for (let i = 0; i < files.length; i++) {
                const file = files[i];  // Access each file from your state
                const storageRef = ref(storage, `userProfileFiles/${uid}/${file.name}`);
                const uploadTask = uploadBytesResumable(storageRef, file);

                const urlFilePromise = new Promise((resolve, reject) => {
                    uploadTask.on('state_changed',
                        (snapshot) => {
                        },
                        (error) => {
                            // Handle unsuccessful uploads
                            console.log(error);
                            reject(error);
                        },
                        () => {
                            // Upload completed successfully, now we can get the download URL
                            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                resolve(downloadURL);
                            });
                        }
                    );
                });

                urlFilesPromises.push(urlFilePromise);
            }

            const urlFiles = await Promise.all(urlFilesPromises);

            form.picture = urlFiles[0]

            await saveStudent({ ...form, uid });

            navigate('/AnyaTutorsMERN_Front/UserLogin');

        } catch (e) {
            let message = ''
            switch (e.message) {
                case "Firebase: Error (auth/invalid-email).":
                    message = "Direccion de e-mail invalida, favor de cambiarla"
                    break;
                case "Firebase: Error (auth/user-not-found).":
                    message = "El correo proporcionado no pertenece a ningun usuario"
                    break;
                case "Firebase: Error (auth/wrong-password).":
                    message = "Contraseña incorrecta, favor de verificar"
                    break;
                case "Firebase: Password should be at least 6 characters (auth/weak-password).":
                    message = "La contraseña debe tener un minimo de 6 caracteres"
                    break;
                case "Firebase: Error (auth/email-already-in-use).":
                    message = "El e-mail proporcionado esta actualente en uso"
                    break;
                default:
                    message = e.message
            }
            setError(message)
        }
    };

    const steps = ['Cuenta', 'Datos personales', 'Documentos'];

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <StepOne form={form} classes={classes} handleInputChange={handleInputChange} hasCapitalLetter={hasCapitalLetter} hasNumbers={hasNumbers} hasSpecialSymbol={hasSpecialSymbol} />;
            case 1:
                return <StepTwo form={form} classes={classes} handleInputChange={handleInputChange} handleInputChangeForm={handleInputChangeForm} />;
            case 2:
                return <StepThree form={form} setForm={setForm} classes={classes} handleInputChange={handleInputChange} />;
            default:
                return 'Unknown step';
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Paper elevation={1} sx={{
                borderRadius: '15px',
                maxHeight: '90vh',
                overflowY: 'auto',
            }}>

                <Typography fontSize={"25px"} padding={'25px 0 0 0'} color={"Black"} fontFamily={'Poppins'} fontWeight={'bold'}>
                    Registro de Cuenta
                </Typography>

                <Stepper activeStep={activeStep} className={classes.customStepper} alternativeLabel sx={{ pt: '30px' }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel sx={{
                                fontSize: '15px',
                            }}>
                                {label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {error && <Typography sx={{ color: "red", padding: '25px 0 0 0' }}>{error}</Typography>}

                <form onSubmit={handleSubmit}>
                    {getStepContent(activeStep)}
                    <div style={{ padding: '10px 0px 30px 0' }}>
                        <Button variant='outlined' disabled={activeStep === 0} onClick={handleBack} sx={{
                            textTransform: 'none',
                            width: '40%',
                            margin: '0 15px 0 0',
                            fontSize: '15px',
                            fontFamily: 'Poppins',
                            fontWeight: 'bold',
                        }}>
                            Atrás
                        </Button>
                        <Button variant="contained" color="primary" onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext} sx={{
                            textTransform: 'none',
                            width: '40%',
                            fontSize: '15px',
                            fontFamily: 'Poppins',
                            fontWeight: 'bold',
                        }}>
                            {activeStep === steps.length - 1 ? 'Registrarse' : 'Siguiente'}
                        </Button>

                        <Button
                            component={Link}
                            to="/AnyaTutorsMERN_Front/userLogIn"
                            variant="text"
                            color="primary"
                            sx={{
                                textTransform: 'none',
                                textDecoration: 'underline',
                                width: '83%',
                                margin: '15px 0 0 0',
                                padding: '7px',
                                fontSize: '15px',
                                fontFamily: 'Poppins',
                                fontWeight: 'bold',
                            }}
                        >
                            ¿Ya tienes una cuenta? Inicia sesión
                        </Button>
                    </div>
                </form>
            </Paper>
        </ThemeProvider >
    );
};

const StepTwo = ({ form, classes, handleInputChange, handleInputChangeForm }) => {

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.datosG2}>
                <h3>Datos Generales</h3>
                <div style={{ marginTop: '10px', paddingTop: '10px' }} className={classes.select}></div>
                <Grid container direction="row" justifyContent="center">
                    <Grid item xs={5} style={{ padding: '0px 10px' }}>
                        <CssTextField
                            required
                            className={classes.cajita}
                            id="nombre"
                            label="Nombre"
                            type="text"
                            variant="outlined"
                            value={form.nombre || ''}
                            onChange={handleInputChange}
                            sx={{ mt: '10px' }}
                            hasError={!form.nombre} // added this line
                        />
                        <CssTextField
                            className={classes.cajita}
                            id="apellidoP"
                            label="Apellido Paterno"
                            type="text"
                            variant="outlined"
                            value={form.apellidoP || ''}
                            onChange={handleInputChange}
                            sx={{ mt: '10px' }}
                            hasError={!form.apellidoP} // added this line
                        />
                        <CssTextField
                            className={classes.cajita}
                            id="apellidoM"
                            label="Apellido Materno"
                            type="text"
                            variant="outlined"
                            value={form.apellidoM || ''}
                            onChange={handleInputChange}
                            sx={{ mt: '10px' }}
                            hasError={!form.apellidoM} // added this line
                        />
                        <FormControl required className={classes.cajita}>
                            <Select
                                id="genero"
                                name="genero"
                                value={form.genero || "No especificar"}
                                onChange={handleInputChangeForm}
                                sx={{ textAlign: 'left', mt: '10px' }}
                            >
                                <MenuItem value=""><em>Ninguno</em></MenuItem>
                                <MenuItem value={"Masculino"}>Masculino</MenuItem>
                                <MenuItem value={"Femenino"}>Femenino</MenuItem>
                                <MenuItem value={"No especificar"}>No especificar</MenuItem>
                            </Select>
                        </FormControl>
                        <CssTextField
                            className={classes.cajita}
                            id="fechaNac"
                            label="Fecha Nacimiento"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={form.fechaNac || ''}
                            onChange={handleInputChange}
                            sx={{ mt: '10px' }}
                            hasError={!form.fechaNac} // added this line
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <CssTextField
                            className={classes.cajita}
                            id="celular"
                            label="Celular"
                            placeholder="000-000-0000"
                            type="tel"
                            variant="outlined"
                            value={form.celular || ''}
                            onChange={handleInputChange}
                            sx={{ mt: '10px' }}
                            hasError={!form.celular} // added this line
                        />
                        <CssTextField
                            className={classes.cajita}
                            id="pais"
                            label="Pais"
                            type="city"
                            variant="outlined"
                            value={form.pais || ''}
                            onChange={handleInputChange}
                            sx={{ mt: '10px' }}
                        />

                        <CssTextField
                            className={classes.cajita}
                            id="estado"
                            label="Estado"
                            type="city"
                            variant="outlined"
                            value={form.estado || ''}
                            onChange={handleInputChange}
                            sx={{ mt: '10px' }}
                        />

                        <CssTextField
                            className={classes.cajita}
                            id="ciudad"
                            label="Ciudad"
                            type="city"
                            variant="outlined"
                            value={form.ciudad || ''}
                            onChange={handleInputChange}
                            sx={{ mt: '10px' }}
                        />
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider >
    );
};

const StepOne = ({ form, classes, handleInputChange, hasCapitalLetter, hasNumbers, hasSpecialSymbol }) => {

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.datosG}>
                <CssTextField
                    className={classes.cajita}
                    id="correo"
                    label="Correo"
                    type="email"
                    variant="outlined"
                    value={form.correo || ''}
                    onChange={handleInputChange}
                    sx={{ mt: '10px' }}
                />
                <CssTextField
                    className={classes.cajita}
                    id="clave"
                    label="Contraseña"
                    type="password"
                    variant="outlined"
                    value={form.clave || ''}
                    onChange={handleInputChange}
                    sx={{ mt: '10px' }}
                />
                <CssTextField
                    className={classes.cajita}
                    id="confirmarClave"
                    label="Confirmar Contraseña"
                    type="password"
                    variant="outlined"
                    value={form.confirmarClave || ''}
                    onChange={handleInputChange}
                    sx={{ mt: '10px' }}
                />

                {form.clave &&
                    <Stack direction={'column'} style={{ paddingTop: '20px', display: "flex", width: "100%", paddingLeft: "0px" }} paddingBottom={'15px'}>
                        <Stack direction={'row'}>
                            {hasCapitalLetter ? (
                                <CheckCircleIcon sx={{ color: "green", mr: 1 }} />
                            ) : (
                                <CancelIcon sx={{ color: "red", mr: 1 }} />
                            )}
                            <Typography sx={{
                                fontSize: "14px", fontFamily: "Poppins", fontWeight: "bold",
                                color: hasCapitalLetter ? "green" : "red"
                            }}> Mínimo una Mayúscula </Typography>
                        </Stack>
                        <Stack direction={'row'}>
                            {hasNumbers ? (
                                <CheckCircleIcon sx={{ color: "green", mr: 1 }} />
                            ) : (
                                <CancelIcon sx={{ color: "red", mr: 1 }} />
                            )}
                            <Typography sx={{ fontSize: "14px", fontFamily: "Poppins", fontWeight: "bold", color: hasNumbers ? "green" : "red" }}> Mínimo un Número </Typography>
                        </Stack>
                        <Stack direction={'row'}>
                            {hasSpecialSymbol ? (
                                <CheckCircleIcon sx={{ color: "green", mr: 1 }} />
                            ) : (
                                <CancelIcon sx={{ color: "red", mr: 1 }} />
                            )}
                            <Typography sx={{ fontSize: "14px", fontFamily: "Poppins", fontWeight: "bold", color: hasSpecialSymbol ? "green" : "red" }}> Mínimo un símbolo especial <u>@!#</u></Typography>
                        </Stack>
                    </Stack>
                }
            </div>
        </ThemeProvider>

    );
};

const StepThree = ({ form, setForm, classes, handleInputChange }) => {
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.datosG}>
                <h3>Foto de perfil</h3>
                <div style={{ marginTop: '10px', paddingTop: '5px' }} className={classes.select}>
                    <div className={classes.iconos}>
                        <FcPanorama className={classes.pic} />
                    </div>
                    <CssTextField
                        className={classes.cajita}
                        id="picture"
                        label="Nueva foto"
                        type="file"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => setForm({ ...form, picture: e.target.files[0] })}
                        sx={{ mt: '10px' }}
                    />

                    <CssTextField
                        className={classes.cajita}
                        id="descripcion"
                        label="Acerca de ti"
                        type="text"
                        multiline
                        rows={2}
                        variant="outlined"
                        value={form.descripcion || ''}
                        onChange={handleInputChange}
                        sx={{ mt: '10px' }}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
};

export const StudentRegisterPage = () => (
    <FormProvider>
        <RegisterForm />
    </FormProvider>
);

export default StudentRegisterPage
