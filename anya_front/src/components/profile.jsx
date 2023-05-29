import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Card, CardContent, Typography, IconButton, Avatar } from '@mui/material';
import { Facebook, GitHub, LinkedIn } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useUser from '../hooks/useStudent'


const useStyles = makeStyles({
    card: {
        width: '50%',
        minWidth: '610px',
        margin: 'auto',
        padding: '20px 18px 10px 18px',
        textAlign: 'center',
        marginTop: '20px',
        borderRadius: '30px',
    },
    title: {
        marginTop: '10px'
    },
    avatar: {
        //margin: 'auto',
        width: '130px',
        height: '130px',
    },
    avatarHover: {
        transition: 'transform 0.3s',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    typographyTitle: {
        paddingBottom: '10px',
    },
    cardAvatar: {
        paddingLeft: '10px',
        display: 'flex',
        justifyContent: 'center',
    },
    separator: {
        margin: '0',
        padding: '10px 0px',
        borderBottom: '1px solid #ccc', // Estilo de línea
    },
});

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, Arial, sans-serif',
    },
});

const UserProfile = () => {
    const { student } = useUser();
    const classes = useStyles();

    const displayData = data => {
        return data ? data : 'Información no disponible';
    }

    // Función para formatear el número de teléfono
    const formatPhoneNumber = (phoneNumber) => {
        if (phoneNumber) {
            const regex = /(\d{3})(\d{3})(\d{4})/; // Patrón: (123)-456-7890
            return phoneNumber.replace(regex, "($1)-$2-$3");
        } else {
            return "Información no disponible"; // Si el número de teléfono es null, devuelve una cadena vacía
        }
    };

    return (
        <ThemeProvider theme={theme}>
            {student && (
                <Card className={classes.card}>
                    <CardContent>
                        <Grid item xs={12}>
                            <Grid container direction="column" style={{ textAlign: 'justify' }}>
                                <Grid container direction='row'>
                                    <Grid item xs={9}>
                                        <Typography variant="h5" className={classes.typographyTitle}><strong>{`${displayData(student.nombre)} ${student.apellidoP} ${student.apellidoM}`}</strong></Typography>
                                        <Typography variant="h6"><strong>Acerca de mi</strong></Typography>
                                        <Typography variant="body1" style={{ paddingRight: '10px' }}> {displayData(student.descripcion)} </Typography>
                                    </Grid>
                                    <Grid item xs={3} className={classes.cardAvatar}>
                                        <Avatar className={`${classes.avatar} ${classes.avatarHover}`} src={displayData(student.picture)} />
                                    </Grid>
                                </Grid>

                                {/* Línea de separación */}
                                <div className={classes.separator}></div>

                                {/* Contenido de la segunda fila */}
                                <Grid container spacing={1} style={{ padding: '15px 0px 0px 0px' }}>
                                    <Grid item xs={6}>
                                        <Typography variant="h6"><strong>Información personal</strong></Typography>
                                        <Typography variant="body1"><strong>Género:</strong> {displayData(student.genero)}</Typography>
                                        <Typography variant="body1"><strong>Fecha de nacimiento:</strong> {student.fechaNac ? new Date(student.fechaNac).toLocaleDateString() : 'Información no disponible'}</Typography>
                                        <Typography variant="body1"><strong>Ubicación:</strong> {`${displayData(student.ciudad)}, ${student.pais}`}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="h6"><strong>Información de contacto</strong></Typography>
                                        <Typography variant="body1" style={{ textAlign: 'left' }}><strong>Correo Electrónico:</strong> {displayData(student.correo)}</Typography>
                                        <Typography variant="body1"><strong>Celular:</strong> {formatPhoneNumber(student.celular)}</Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                                        <IconButton className={classes.avatarHover} style={{ color: '#0e76a8' }}><LinkedIn style={{ fontSize: '32px' }} /></IconButton>
                                        <IconButton className={classes.avatarHover} style={{ color: '#3b5998' }}><Facebook style={{ fontSize: '32px' }} /></IconButton>
                                        <IconButton className={classes.avatarHover} style={{ color: '#333' }}> <GitHub style={{ fontSize: '32px' }} /></IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            )}
        </ThemeProvider>
    );
}

export default UserProfile;