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
import useUser from "../hooks/useUser";

const socket = io('http://localhost:4000')

const Chat = () => {

    const { user } = useUser();


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
            sender: user.email,
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
                                    <Avatar>{message.sender[0]}</Avatar>
                                    <Box ml={2}>
                                        <Typography variant="body1">{message.sender}</Typography>
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