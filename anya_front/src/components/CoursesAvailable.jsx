import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, Avatar, Card, } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useUser from '../hooks/useStudent'
import { getUnEnrolledCourses } from '../api/CoursesAPI';
import CourseModal from '../modals/CourseInfoStudent';


function CoursesAvailable() {

    const { student } = useUser();

    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleClose = () => setModalOpen(false);
    const handleCourseClick = (course) => {
        setSelectedCourse(course);
        setModalOpen(true);
    };

    useEffect(() => {

        student && getUnEnrolledCourses(student._id).then(allCourses => setCourses(allCourses))

    }, [student]);

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
                    <Typography variant="h5" style={{ fontSize: '26px', marginBottom: '20px' }}>Cursos Disponibles</Typography>
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
                                            <Avatar src={course.imagenPortada || coverImage} variant="square" style={{ width: '100%', height: '60px', borderRadius: '30px 5px 30px 5px', }} />
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
                <CourseModal open={modalOpen} handleClose={handleClose} course={selectedCourse} user={student} />
            </Box>
        </ThemeProvider>
    );
}

export default CoursesAvailable;