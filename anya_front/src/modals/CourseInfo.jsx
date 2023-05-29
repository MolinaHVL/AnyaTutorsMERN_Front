import React from 'react';
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
    ListItemText
} from '@mui/material';

const CourseModal = ({ open, handleClose, course }) => {
    const {
        coverImage,
        teacherProfileImage,
        title,
        description,
        numVideos,
        comments
    } = course;

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
            <DialogTitle>
                <Grid container spacing={3} alignItems="center">
                    <Grid item>
                        <Avatar src={coverImage} variant="square" style={{ width: 60, height: 60 }} />
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
                <Typography variant="body1" style={{ fontFamily: 'Poppins', color: '#023e8a' }}>
                    {description}
                </Typography>
                <List>
                    {comments.map((comment, index) => (
                        <ListItem key={index}>
                            <ListItemAvatar>
                                <Avatar />
                            </ListItemAvatar>
                            <ListItemText primary={comment.username} secondary={comment.text} />
                        </ListItem>
                    ))}
                </List>
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
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" variant="contained" style={{ fontFamily: 'Poppins' }}>
                    Close
                </Button>
                <Button onClick={/* enroll course function here */} color="secondary" variant="contained" style={{ fontFamily: 'Poppins' }}>
                    Enroll
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CourseModal;