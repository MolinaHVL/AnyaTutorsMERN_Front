import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Grid, Paper, Typography, Box, Avatar } from '@mui/material';
import { useForm } from 'react-hook-form';
import useUser from '../hooks/useStudent'
import { getCourses, saveCourse } from '../api/CoursesAPI';
import CourseModal from '../modals/CourseInfo';


function CoursesComponent() {

    const { student } = useUser();

    const [show, setShow] = useState(false);
    const [courses, setCourses] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    return (
        <Box
            sx={{
                bgcolor: '#ffffff',
                minHeight: '100vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Grid container spacing={2} justifyContent="center">
                {courses.length === 0
                    ? <Typography variant="h6">Tu no tienes ningun curso todavia</Typography>
                    : courses.map((course, index) => (
                        <Grid item xs={4} key={index}>
                            <Paper elevation={3}>
                                <Avatar src={course.teacher.picture} style={{ width: 30, height: 30 }} />
                                <Typography variant="h5">{course.titulo}</Typography>
                                <Typography variant="body1">Maestro: {course.teacher.nombre}</Typography>
                                <Typography variant="body1">Materia: {course.materia}</Typography>
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>

            <Button variant="outlined" color="primary" onClick={handleShow} sx={{ mt: 3 }}>
                Agregar un nuevo curso
            </Button>

            {/* <Dialog open={show} onClose={handleClose}>
                <DialogTitle>Agregar un nuevo curso</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField id="titulo" style={{ marginBottom: '10px' }} label="Titulo" {...register('titulo', { required: true })} fullWidth />
                        {errors && errors.title && <Typography>Este campo es requerido</Typography>}

                        <TextField id="materia" style={{ marginBottom: '10px' }} label="materia del curso" multiline {...register('materia', { required: true })} fullWidth />
                        {errors && errors.description && <Typography>Este campo es requerido</Typography>}

                        <TextField id="descripcion" style={{ marginBottom: '10px' }} label="Descripcion del Curso" multiline {...register('descripcion', { required: true })} fullWidth />
                        {errors && errors.description && <Typography>Este campo es requerido</Typography>}

                        <TextField id="imagenPortada" style={{ marginBottom: '10px' }} label="Imagen de portada (Opcional)" {...register('imagenPortada', { required: false })} fullWidth />

                        <Typography>Videos:</Typography>
                        {videos.map((video, index) => (
                            <TextField key={index} style={{ marginBottom: '10px' }} label={`Video URL ${index + 1}`} value={video} onChange={(event) => handleVideoChange(event, index)} fullWidth />
                        ))}

                        <DialogActions>
                            <Button variant="contained" color="primary" onClick={addVideoField}>Agregar otro video</Button>
                            <Button type="submit" variant="contained" color="secondary">Crear curso</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog> */}
            <CourseModal open={show} handleClose={handleClose} />
        </Box>
    );
}

export default CoursesComponent;