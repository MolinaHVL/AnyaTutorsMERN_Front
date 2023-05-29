import React from 'react';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

const CourseModal = ({ open, handleClose, course }) => {
    // const {
    //     coverImage,
    //     teacherProfileImage,
    //     title,
    //     description,
    //     numVideos,
    //     comments
    // } = course;

    const coverImage = "https://cdn.statically.io/img/timelinecovers.pro/facebook-cover/download/ultra-hd-space-facebook-cover.jpg"
    const teacherProfileImage = "https://www.vectornator.io/blog/content/images/2022/03/611b830385d20348a9809a8e_Cover-Album-Covers--1-.png"
    const title = "Curso mamalon"
    const description = "Este curso es el mero mero, el que te va a traer un buen de morras a tus pies si sigues paso a paso como ser un macho alfa"
    const numVideos = 3
    const comments = [{ username: "Arshun", text: "Este curso funciona incluso antes de tomarlo alv" }]
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md" >
                <DialogTitle>
                    <Grid container spacing={3} alignItems="center" className={classes.modalTitle}>
                        <Grid item>
                            <Avatar src={coverImage} variant="square" style={{ width: '100px', height: '60px' }} />
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" style={{ fontFamily: 'Poppins', color: '#004d7a' }}>
                                {title}
                            </Typography>
                            <Grid container alignItems="center">
                                <Avatar src={teacherProfileImage} style={{ width: 30, height: 30 }} />
                                <Typography variant="subtitle1" style={{ marginLeft: 8, fontFamily: 'Poppins', color: '#0077b6' }}>
                                    {numVideos} Videos
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
                            <Typography variant="body1" style={{ fontFamily: 'Poppins', color: '#023e8a', marginBottom: '10px'}}>
                                {description}
                            </Typography>

                            {/* Línea de separación */}
                            <div className={classes.separator}></div>

                            <Typography variant="h6" style={{ marginTop: '10px' }}>
                                Comentarios
                            </Typography>
                        </Grid>
                        <Grid container direction="column" style={{ textAlign: 'justify' }}>
                            <List>
                                {comments.map((comment, index) => (
                                    <ListItem key={index} style={{ padding: '0px' }}>
                                        <ListItemAvatar>
                                            <Avatar src={"https://res.cloudinary.com/practicaldev/image/fetch/s--LxmrVhLY--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/u1x7n8mbvor1nq6tcbk0.jpg"} />
                                        </ListItemAvatar>
                                        <ListItemText primary={comment.username} secondary={comment.text} />
                                    </ListItem>
                                ))}
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
                        />
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Grid container justifyContent='flex-end' className={classes.modalActions}>
                        <Button onClick={handleClose} color="primary" variant='outlined' className={classes.buttonsCustomized} style={{ margin: '0px 10px 15px 0px' }}>
                            Cerrar
                        </Button>
                        <Button color='secondary' variant="contained" className={classes.buttonsCustomized} style={{ margin: '0px 15px 15px 0px' }}>
                            Registrarse
                        </Button>
                    </Grid>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
};

export default CourseModal;