import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Avatar,
    Typography,
    Grid,
    TextField,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@mui/material';
import { addComment, deleteCourse } from '../api/CoursesAPI';


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
        fontWeight: 'bold',
        color: '',
    },
    modalTitle: {
        width: '100%',
        padding: '15px 10px 0px 10px',
    },
    modalContent: {
        width: '100%',
        padding: '0px 10px',
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

    const [inputValue, setInputValue] = useState("");

    const [comments, setComments] = useState([])

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleDelete = async (id) => {
        try {
            await deleteCourse(id);
            handleClose();
            navigate('/AnyaTutorsMERN_Front/profile');
        } catch (err) {
            console.error(err);
            // handle the error appropriately
        }
    };

    const handleSendMessage = async (course, profilePhoto, from, message) => {
        const newComment = { profilePhoto: profilePhoto, from: from, message: message }
        setComments([...comments, newComment])
        setInputValue('')

        await addComment(course, newComment)
    };

    const classes = useStyles();

    useEffect(() => {
        if (course && course.comments) {
            setComments(course.comments)
        }
    }, [course]);

    if (!course) {
        return null;
    }



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
                            <Typography variant="h6" style={{ marginBottom: '5px' }}>
                                Descripción
                            </Typography>
                            <Typography variant="body1" style={{ fontFamily: 'Poppins', color: '#023e8a', marginBottom: '10px' }}>
                                {course.descripcion}
                            </Typography>

                            {/* Línea de separación */}
                            <div className={classes.separator}></div>
                            <Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
                                Estudiantes Registrados:
                            </Typography>

                            {course && course.students ? (
                                course.students.length > 0 ? (
                                    <Grid container spacing={3}>
                                        {course.students.map((student, index) => (
                                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                                <Grid container direction="column" alignItems="center">
                                                    <Grid item>
                                                        <Avatar src={student.picture} />
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant="body1">{student.nombre}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        ))}
                                    </Grid>
                                ) : (
                                    <Typography variant="body1" style={{ fontFamily: 'Poppins', color: '#023e8a' }}>
                                        El curso no tiene estudiantes registrados todavia...
                                    </Typography>
                                )
                            ) : (
                                <Typography variant="body1" style={{ fontFamily: 'Poppins', color: '#023e8a' }}>
                                    Cargando estudiantes...
                                </Typography>
                            )}

                            <div className={classes.separator}></div>

                            <Typography variant="h6" style={{ marginTop: '10px' }}>
                                Comentarios
                            </Typography>
                        </Grid>
                        <Grid container direction="column" style={{ textAlign: 'justify' }}>
                            <List>
                                {comments.length === 0 ?
                                    <Typography variant="body1" style={{ fontFamily: 'Poppins', color: '#023e8a' }}>
                                        Este curso no tiene comentarios todavia...
                                    </Typography>
                                    :
                                    comments.map((comment, index) => (
                                        <ListItem key={index}>
                                            <ListItemAvatar>
                                                <Avatar src={comment.profilePhoto} />
                                            </ListItemAvatar>
                                            <ListItemText primary={comment.from} secondary={comment.message} />
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </Grid>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="comment"
                            label="Add your comment"
                            type="text"
                            id="comment"
                            style={{ fontFamily: 'Poppins' }}
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {

                                    if (inputValue.trim() === '') {
                                        e.preventDefault(); // Evitar el comportamiento por defecto de Enter (nueva línea)

                                        const trimmedValue = inputValue.trim(); // Eliminar los espacios en blanco al inicio y al final

                                        if (trimmedValue !== '') {


                                            handleSendMessage(course, user.picture, user.nombre, inputValue);
                                        }
                                    } else {
                                        e.preventDefault(); // Evitar el comportamiento por defecto de Enter (nueva línea)
                                        // Función que maneja el envío del mensaje
                                        handleSendMessage(course, user.picture, user.nombre, inputValue);
                                    }
                                }
                            }}
                        />

                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Grid container justifyContent='flex-end' className={classes.modalActions}>
                        <Button onClick={handleClose} color="primary" variant='outlined' className={classes.buttonsCustomized} style={{ margin: '0px 10px 15px 0px' }}>
                            Cerrar
                        </Button>
                        <Button onClick={() => handleDelete(course._id)} color="secondary" variant='contained' className={classes.buttonsCustomized} style={{ margin: '0px 10px 15px 0px' }}>
                            Borrar Curso
                        </Button>
                    </Grid>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
};

export default CourseModal;