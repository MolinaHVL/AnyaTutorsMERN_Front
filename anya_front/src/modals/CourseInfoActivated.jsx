import React from 'react';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom"
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Avatar,
    Typography,
    Grid,
} from '@mui/material';
import VideoSlider from '../components/VideoSlider';
import { unEnrollCourse } from '../api/CoursesAPI';


const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, Arial, sans-serif',
    },
});

const useStyles = makeStyles({
    buttonsCustomized: {
        textTransform: 'none',
        textDecoration: 'none',
        width: '120px',
        padding: '3',
        fontSize: '13px',
        // fontWeight: 'bold',
        // color: '',
    },
    modalTitle: {
        width: '100%',
        padding: '15px 10px 0px 10px',
    },
    modalContent: {
        width: '100%',
        padding: '0px 10px',
        backgroundColor: "black",
        borderRadius: '10px'

    },
    modalActions: {
        width: '100%',
        padding: '0px 10px',
    },
    separator: {
        margin: '0',
        padding: '0',
        borderBottom: '1px solid #ccc', // Estilo de línea
    },
});

const CourseModal = ({ open, handleClose, course, user }) => {

    const navigate = useNavigate()

    const classes = useStyles();

    if (!course) {
        return null;
    }

    const handleUnEnroll = async (course, student) => {
        await unEnrollCourse(course, student);

        navigate('/AnyaTutorsMERN_Front/student')
    };

    return (
        <ThemeProvider theme={theme}>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md" >
                <DialogTitle>
                    <Grid container spacing={3} alignItems="center" className={classes.modalTitle}>
                        <Grid item>
                            <Avatar src={course.imagenPortada} variant="square" style={{ width: '100px', height: '60px' }} />
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" style={{ fontFamily: 'Poppins', color: '#004d7a' }}>
                                {course.titulo}
                            </Typography>
                            <Grid container alignItems="center">
                                <Avatar src={course.teacher.picture} style={{ width: 30, height: 30 }} />
                                <Typography variant="subtitle1" style={{ marginLeft: 8, fontFamily: 'Poppins', color: '#0077b6' }}>
                                    {course.videos.length} Video(s)
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogTitle>
                <DialogContent>
                    <Grid container className={classes.modalContent}>
                        <Grid container direction="column" style={{ textAlign: 'justify' }}>
                            <Typography variant="h6" style={{ marginTop: ' 10px', marginBottom: '5px', color: 'white' }}>
                                Descripción
                            </Typography>
                            <Typography variant="body1" style={{ fontFamily: 'Poppins', color: 'white', marginBottom: '10px' }}>
                                {course.descripcion}
                            </Typography>

                            {/* Línea de separación */}
                            <div className={classes.separator}></div>

                            <Typography variant="h6" style={{ marginTop: '10px', marginBottom: '15px', color: 'white' }}>
                                Videos
                            </Typography>
                        </Grid>
                        <Grid container direction="column" style={{ textAlign: 'justify' }}>

                            <VideoSlider videos={course.videos} />



                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Grid container justifyContent='flex-end' className={classes.modalActions}>
                        <Button onClick={handleClose} color="primary" variant='outlined' className={classes.buttonsCustomized} style={{ margin: '0px 10px 15px 0px' }}>
                            Cerrar
                        </Button>
                        <Button color='secondary' variant="contained" onClick={() => handleUnEnroll(course, user)} className={classes.buttonsCustomized} style={{ margin: '0px 15px 15px 0px' }}>
                            Abandonar Curso
                        </Button>
                    </Grid>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
};

export default CourseModal;