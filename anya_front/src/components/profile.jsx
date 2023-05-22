import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import useUser from '../hooks/useStudent'


const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        margin: 'auto',
        textAlign: 'center',
        marginTop: '20px'
    },
    title: {
        marginTop: '10px'
    },
    avatar: {
        margin: 'auto',
        width: '100px',
        height: '100px'
    }
});

const UserProfile = () => {
    const { student } = useUser();
    const classes = useStyles();

    const displayData = data => {
        return data ? data : 'Información no disponible';
    }

    return (
        student && (
            <Card className={classes.card}>
                <CardContent>
                    <Avatar className={classes.avatar} src={displayData(student.picture)} />
                    <Typography variant="h5" className={classes.title}>Perfil del Estudiante</Typography>
                    <Typography variant="body1"><strong>Nombre:</strong> {displayData(student.nombre)}</Typography>
                    <Typography variant="body1"><strong>Apellido Paterno:</strong> {displayData(student.apellidoP)}</Typography>
                    <Typography variant="body1"><strong>Apellido Materno:</strong> {displayData(student.apellidoM)}</Typography>
                    <Typography variant="body1"><strong>Correo Electrónico:</strong> {displayData(student.correo)}</Typography>
                    <Typography variant="body1"><strong>Género:</strong> {displayData(student.genero)}</Typography>
                    <Typography variant="body1"><strong>Fecha de Nacimiento:</strong> {student.fechaNac ? new Date(student.fechaNac).toLocaleDateString() : 'Información no disponible'}</Typography>
                    <Typography variant="body1"><strong>Celular:</strong> {displayData(student.celular)}</Typography>
                    <Typography variant="body1"><strong>País:</strong> {displayData(student.pais)}</Typography>
                    <Typography variant="body1"><strong>Estado:</strong> {displayData(student.estado)}</Typography>
                    <Typography variant="body1"><strong>Ciudad:</strong> {displayData(student.ciudad)}</Typography>
                </CardContent>
            </Card>
        )
    );
}

export default UserProfile;