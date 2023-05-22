import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Grid, Paper, Typography, Box } from '@mui/material';

function CoursesComponent() {
    const [show, setShow] = useState(false);
    const [courses, setCourses] = useState([]);
    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [courseURLs, setCourseURLs] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = () => {
        const newCourse = { courseName, courseDescription, courseURLs };
        setCourses([...courses, newCourse]);
        setCourseName('');
        setCourseDescription('');
        setCourseURLs('');
        handleClose();
    }

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
                                <Typography variant="h5">{course.courseName}</Typography>
                                <Typography variant="body1">{course.courseDescription}</Typography>
                                <Typography variant="body2">{course.courseURLs}</Typography>
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>

            <Button variant="outlined" color="primary" onClick={handleShow} sx={{ mt: 3 }}>
                Agregar un nuevo curso
            </Button>

            <Dialog open={show} onClose={handleClose}>
                <DialogTitle>Agregar un nuevo curso</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Nombre del curso"
                        type="text"
                        fullWidth
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Descripción"
                        type="text"
                        fullWidth
                        value={courseDescription}
                        onChange={(e) => setCourseDescription(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="urls"
                        label="URLs"
                        type="text"
                        fullWidth
                        value={courseURLs}
                        onChange={(e) => setCourseURLs(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cerrar
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Guardar Cambios
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default CoursesComponent;