import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar';

const RolePage = () => {
    return (
        <>
            <Box sx={{
                backgroundColor: 'white',
                display: "static",
                marginX: "auto",
                marginY: "5%",
                padding: "5%",
                paddingTop: "2%",
                color: "white",
                opacity: "0.9",
                borderRadius: "15px",
                width: "600px", // Ancho fijo en píxeles
                '@media screen and (max-width: 600px)': { // Ancho del 100% para pantallas más pequeñas
                    width: "100%",
                }
            }}>
                <Stack direction="column">
                    <Typography color="black" display="block" fontSize={"36px"} padding={"5px"} marginBottom={"20px"}>Elige tu rol: </Typography>

                    <Stack direction="row" display={"flex"}>
                        <Link to="/userRegister" style={{ width: 0.5, flexGrow: 1, textDecoration: "none", display: "flex" }}>

                            <Button variant="contained"
                                sx={{
                                    background: "#8adaff",
                                    height: 64,
                                    width: 0.50,
                                    margin: 0,
                                    padding: 0.1,
                                    borderRadious: 0,
                                    boxShadow: 3,
                                    border: 1,
                                    borderColor: "#8adaff",
                                    color: "Black",
                                    fontSize: "22px",
                                    fontWeight: "bold",
                                    fontFamily: "monospace",
                                    flexGrow: 1,

                                }}
                            >
                                ESTUDIANTE
                            </Button>
                        </Link>
                        <Link to="/teacher" style={{ width: 0.5, flexGrow: 1, textDecoration: "none", display: "flex" }}>

                            <Button variant="contained"
                                sx={{
                                    background: "#8adaff",
                                    height: 64,
                                    width: 0.50,
                                    margin: 0,
                                    padding: 0.1,
                                    borderRadious: 0,
                                    boxShadow: 3,
                                    border: 1,
                                    borderColor: "#8adaff",
                                    color: "Black",
                                    fontSize: "22px",
                                    fontWeight: "bold",
                                    fontFamily: "monospace",
                                    flexGrow: 1,

                                }}
                            >
                                MAESTRO
                            </Button>
                        </Link>
                    </Stack>
                </Stack>


            </Box>
        </>

    );
}

export default RolePage;