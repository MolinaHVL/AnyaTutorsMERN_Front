import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";

const RolePage = () => {

    const theme = createTheme({
        typography: {
            fontFamily: 'Poppins, Arial, sans-serif',
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{
                    backgroundColor: 'white',
                    display: "static",
                    marginX: 'auto',
                    padding: "5%",
                    color: "white",
                    opacity: "0.9",
                    borderRadius: "15px",
                    width: "600px", // Ancho fijo en píxeles
                    minWidth: "600px",
                    '@media screen and (max-width: 600px)': { // Ancho del 100% para pantallas más pequeñas
                        width: "100%",
                    }
                }}>
                    <Stack direction="column">
                        <Typography color="black" display="block" fontSize={"30px"} padding={"5px"} marginBottom={"20px"}>Elige tu rol: </Typography>

                        <Stack direction="row" display={"flex"}>
                            <Link to="/AnyaTutorsMERN_Front/studentRegister" style={{ width: 0.5, flexGrow: 1, textDecoration: "none", display: "flex" }}>

                                <Button variant='outlined' color='secondary'
                                    sx={{
                                        textTransform: 'none',
                                        textDecoration: 'none',
                                        height: 64,
                                        width: 0.50,
                                        margin: '0 10px 0 10px',
                                        padding: 0.1,
                                        borderRadious: '10px',
                                        fontSize: "22px",
                                        fontWeight: "bold",
                                        flexGrow: 1,
                                    }}
                                >
                                    Estudiante
                                </Button>
                            </Link>
                            <Link to="/AnyaTutorsMERN_Front/teacherRegister" style={{ width: 0.5, flexGrow: 1, textDecoration: "none", display: "flex" }}>

                                <Button variant='outlined' color='secondary'
                                    sx={{
                                        textTransform: 'none',
                                        textDecoration: 'none',
                                        height: 64,
                                        width: 0.50,
                                        margin: '0 10px',
                                        padding: 0.1,
                                        borderRadious: '10px',
                                        fontSize: "22px",
                                        fontWeight: "bold",
                                        flexGrow: 1,
                                    }}
                                >
                                    Tutor
                                </Button>
                            </Link>
                        </Stack>
                        <Stack direction="row" display={"flex"}>
                            <Button
                                component={Link}
                                to="/AnyaTutorsMERN_Front/UserLogIn"
                                variant="text"
                                color='primary'
                                children="¿Ya tienes una cuenta? Inicia sesión"
                                sx={{
                                    textTransform: 'none',
                                    textDecoration: 'underline',
                                    height: 64,
                                    width: 1.0,
                                    margin: '20px 10px 0 10px',
                                    padding: 0,
                                    borderRadious: '10px',
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    flexGrow: 1,
                                }}
                            />
                        </Stack>
                    </Stack>


                </Box>
            </ThemeProvider>
        </>
    );
}

export default RolePage;