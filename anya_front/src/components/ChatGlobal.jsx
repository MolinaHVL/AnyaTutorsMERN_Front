import React, { useEffect, useState } from "react";
import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { io } from "socket.io-client"
import useUser from "../hooks/useStudent";

const socket = io(process.env.REACT_APP_API_URL)

const Chat = () => {

    const { student } = useUser();


    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        // Listen for incoming messages
        socket.on("message", (data) => {
            setMessages([...messages, data]);
        });

        // Clean up the event listener
        return () => {
            socket.off("message");
        };
    }, [messages]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSendMessage = () => {
        const newMessage = {
            text: inputValue,
            timestamp: new Date(),
            sender: [student.nombre, student.picture],
        };
        socket.emit("message", newMessage);
        setInputValue("");
    };

    return (
        <Container maxWidth="md">
            <Box mt={5}>
                <Typography variant="h4" align="center" gutterBottom>
                    Live Chat
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper variant="outlined" style={{ height: "400px", overflow: "scroll" }}>
                            {messages.map((message, index) => (
                                <Box key={index} display="flex" alignItems="center" p={2}>
                                    <Avatar src={message.sender[1]}>{message.sender[0][0]}</Avatar>
                                    <Box ml={2} textAlign={'left'}>
                                        <Typography variant="body1"><strong>{message.sender[0]}</strong> [{student.role}]</Typography>
                                        <Typography variant="body2">{message.text}</Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Box display="flex" alignItems="center">
                            <TextField
                                fullWidth
                                value={inputValue}
                                onChange={handleInputChange}
                                label="Type your message"
                                variant="outlined"
                            />
                            <Button variant="contained" color="primary" onClick={handleSendMessage} style={{ marginLeft: "10px" }}>
                                Send
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Chat;