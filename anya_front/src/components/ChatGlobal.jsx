import React, { useEffect, useState, useRef } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, Arial, sans-serif',
    },
});

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
            sender: [student.nombre, student.picture, student.role],
        };

        // Eliminar los espacios en blanco al inicio y al final
        const trimmedValue = inputValue.trim();

        if (trimmedValue !== '') {
            socket.emit("message", newMessage);
            // Limpia el valor del TextField después de enviar el mensaje si es necesario:
            setInputValue("");
        }
    };

    const textFieldRef = useRef(null);

    return (
        <ThemeProvider theme={theme}>
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
                                            <Typography variant="body1"><strong>{message.sender[0]}</strong> [{message.sender[2]}]</Typography>
                                            <Typography variant="body2">{message.text}</Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Box display="flex" alignItems="flex-start" justifyContent="normal">
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={3} // Número de filas visibles inicialmente
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    label="Type your message"
                                    variant="outlined"
                                    inputRef={textFieldRef}
                                    InputProps={{
                                        style: {
                                            fontFamily: 'Poppins',
                                            // fontWeight: 'Bold',
                                        },
                                    }}
                                    FormHelperTextProps={{
                                        style: {
                                            fontFamily: 'Poppins',
                                        },
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            if (inputValue.trim() === '') {
                                                e.preventDefault(); // Evitar el comportamiento por defecto de Enter (nueva línea)

                                                const trimmedValue = inputValue.trim(); // Eliminar los espacios en blanco al inicio y al final

                                                if (trimmedValue !== '') {
                                                    // Función que maneja el envío del mensaje
                                                    handleSendMessage();
                                                }
                                            } else {
                                                e.preventDefault(); // Evitar el comportamiento por defecto de Enter (nueva línea)
                                                // Función que maneja el envío del mensaje
                                                handleSendMessage();
                                            }
                                        }
                                    }}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter' && e.shiftKey) {
                                            const textField = textFieldRef.current;
                                            textField.value += '\n'; // Agregar salto de línea al valor del TextField
                                            e.preventDefault(); // Evitar el comportamiento por defecto de Enter (nueva línea)
                                        }
                                    }}
                                />
                                <Button variant="contained" color="primary" onClick={handleSendMessage} sx={{
                                    marginLeft: '10px',
                                    maxHeight: '50%',
                                    textTransform: 'none',
                                    width: '20%',
                                    fontSize: '16px',
                                    fontFamily: 'Poppins',
                                    // fontWeight: 'bold',
                                }}>
                                    Enviar
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Chat;