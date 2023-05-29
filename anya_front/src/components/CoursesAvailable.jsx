import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Grid, Typography, Box, Avatar, Card, } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import useUser from '../hooks/useStudent'
import { getCourses, saveCourse } from '../api/CoursesAPI';
import CourseModal from '../modals/CourseInfoStudent';


function CoursesAvailable() {

    const { student } = useUser();

    const [show, setShow] = useState(false);
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleClose = () => { setShow(false); setModalOpen(false); };
    const handleCourseClick = (course) => {
        setSelectedCourse(course);
        setModalOpen(true);
    };

    const { register, handleSubmit, errors } = useForm();
    const [videos, setVideos] = useState([""]);

    useEffect(() => {

        getCourses().then(allCourses => setCourses(allCourses))

    }, []);

    const onSubmit = async (data) => {
        const videoObjects = videos.map(video => ({ url: video }));
        const course = { ...data, idMaestro: student._id, videos: videoObjects }
        console.log(course)
        const savedCourse = await saveCourse(course)
        console.log(savedCourse)

    };

    const addVideoField = () => {
        setVideos([...videos, ""]);
    };

    const handleVideoChange = (event, index) => {
        const newVideos = [...videos];
        newVideos[index] = event.target.value;
        setVideos(newVideos);
    };

    const theme = createTheme({
        typography: {
            fontFamily: 'Poppins, Arial, sans-serif',
        },
    });

    const coverImage = "https://cdn.statically.io/img/timelinecovers.pro/facebook-cover/download/ultra-hd-space-facebook-cover.jpg"

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    bgcolor: '#ffffff',
                    minHeight: '100vh',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    // justifyContent: 'center', //Para centrar el contenido verticalmente
                    padding: '30px 20px',
                }}
            >
                <Grid container direction="column" justifyContent="center">
                    <Grid item>
                        <Typography variant="h5" style={{ fontSize: '26px', marginBottom: '20px' }}>Cursos Disponibles</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2} justifyContent="center">
                    {courses.length === 0
                        ? <Typography variant="h6">Tu no tienes ningun curso todavia</Typography>
                        : courses.map((course, index) => (

                            <Card style={{
                                width: '20%',
                                // height: '150px',
                                minWidth: '250px',
                                margin: '10px',
                                padding: '15px 20px',
                                textAlign: 'center',
                                marginTop: '20px',
                                borderRadius: '30px',
                            }} onClick={() => handleCourseClick(course)}>

                                <Grid item xs={12} key={index}>
                                    <Grid container direction="column" style={{ textAlign: 'justify' }}>
                                        <Grid item xs={6}>
                                            <Avatar src={coverImage} variant="square" style={{ width: '100%', height: '60px', borderRadius: '30px 5px 30px 5px', }} />
                                        </Grid>
                                        <Grid item xs={6} style={{ margin: '10px 0px 10px 0px' }}>
                                            <Typography variant="h5">{course.titulo}</Typography>

                                            <Grid container direction="row" style={{ textAlign: 'left' }}>
                                                <Grid item xs={12}>
                                                    <Typography variant="body1" ><strong>Materia: </strong>{course.materia}</Typography>

                                                    <Grid container direction="row" style={{ marginTop: '10px' }}>
                                                        <Grid item xs={1}>
                                                            <Avatar src={course.teacher.picture} style={{ width: '100%', height: '20px' }} />
                                                        </Grid>
                                                        <Grid item xs={11} style={{ paddingLeft: '8px' }}>
                                                            <Typography variant="body1"><strong>Maestro: </strong>{`${course.teacher.nombre} ${course.teacher.apellidoP}`}</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>


                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Card>

                        ))
                    }
                </Grid>

                <Dialog open={show} onClose={handleClose}>
                    <DialogTitle>
                        <Typography variant="h6" style={{ fontFamily: 'Poppins', color: '#004d7a' }}>
                            Agregar un nuevo curso
                        </Typography>
                    </DialogTitle>
                    <DialogContent>
                        <Typography variant="body1" style={{ fontSize: '15px', marginBottom: '5px' }}>
                            Información del curso
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '5px' }}>
                            <TextField id="titulo" style={{ marginBottom: '10px' }} label="Titulo" {...register('titulo', { required: true })} fullWidth />
                            {errors && errors.title && <Typography>Este campo es requerido</Typography>}

                            <TextField id="materia" style={{ marginBottom: '10px' }} label="Materia del curso" multiline {...register('materia', { required: true })} fullWidth />
                            {errors && errors.description && <Typography>Este campo es requerido</Typography>}

                            <TextField id="descripcion" style={{ marginBottom: '10px' }} label="Descripcion del Curso" multiline {...register('descripcion', { required: true })} fullWidth />
                            {errors && errors.description && <Typography>Este campo es requerido</Typography>}

                            <TextField id="imagenPortada" style={{ marginBottom: '10px' }} label="Imagen de portada (Opcional)" {...register('imagenPortada', { required: false })} fullWidth />

                            <Typography variant="body1" style={{ fontSize: '15px', marginBottom: '5px' }}>
                                Videos
                            </Typography>
                            {videos.map((video, index) => (
                                <TextField key={index} style={{ marginTop: '5px', marginBottom: '5px' }} label={`Video URL ${index + 1}`} value={video} onChange={(event) => handleVideoChange(event, index)} fullWidth />
                            ))}

                            <DialogActions style={{ padding: '20px 0px 5px 0px' }}>
                                <Button variant='outlined' color="primary" onClick={addVideoField} style={{
                                    textTransform: 'none',
                                    textDecoration: 'none',
                                    padding: '3',
                                    fontSize: '13px',
                                    // fontWeight: 'bold',
                                }}>
                                    Agregar otro video
                                </Button>
                                <Button type="submit" variant="contained" color="secondary" style={{
                                    textTransform: 'none',
                                    textDecoration: 'none',
                                    width: '120px',
                                    padding: '3',
                                    fontSize: '13px',
                                    // fontWeight: 'bold',
                                }}>
                                    Crear curso
                                </Button>
                            </DialogActions>
                        </form>
                    </DialogContent>
                </Dialog>
                <CourseModal open={modalOpen} handleClose={handleClose} course={selectedCourse} />
            </Box>
        </ThemeProvider>
    );
}

export default CoursesAvailable;