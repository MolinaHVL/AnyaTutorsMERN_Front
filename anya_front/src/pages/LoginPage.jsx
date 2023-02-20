import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { Link } from "react-router-dom"
import Button from '@mui/material/Button'
import { useState } from 'react';
import LogUserModal from '../modals/LogUserModal'

const LoginPage = () => {

    // Hook para desplegar el LogUserModal
    const [isLogUserModalVisible, setIsLogUserModalVisible] = useState(false);

    return (
        <>
            <Box container sx={{
                display: "static",
                width: "76%",
                marginX: "10%",
                marginY: "5%",
                padding: "2%",
                paddingTop: "2%",
                background: "Black",
                color: "white",
                opacity: "0.75",
            }}>
                <Stack direction={'row'} display={'flex'}>
                    <Stack direction={"column"} sx={{ width: 0.5, flexGrow: 1 }} paddingY={{ xs: 0, md: "5%" }}>
                        <Box paddingRight={{ xs: 0, md: "35px" }}>
                            <Typography fontSize={"32px"} paddingBottom={"30px"}>
                                Bienvenido a Anya Tutors
                            </Typography>
                            <Typography sx={{ textAlign: "center", fontSize: "20px", paddingBottom: "20px" }}>
                                Anya Tutors es una red de asesorias orientada al ambito profesional
                                , la cual permite a los usuarios obtener ayuda de profesionistas
                                cualificados las 24 horas a precios accesibles.
                            </Typography>
                        </Box>
                        <Stack direction={"row"} paddingRight={{ xs: 0, md: "35px" }} display={"flex"}>
                            <Link to="/" style={{ width: 0.5, flexGrow: 1, textDecoration: "none", display: "flex" }}>
                                <Button variant="contained"
                                    onClick={() => setIsLogUserModalVisible(true)}
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
                                    INICIAR SESION
                                </Button>
                            </Link>
                            <Link to="/role" style={{ width: 0.5, flexGrow: 1, textDecoration: "none", display: "flex" }}>
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
                                    REGISTRARSE
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                    <Box
                        component="img"
                        sx={{ width: 0.5, height: "500px", display: { xs: "none", md: "flex" }, objectFit: "cover", }}
                        src={'https://th.bing.com/th/id/OIP.CvqHA4TXDaojZXwtLBStyQHaHa?pid=ImgDet&rs=1'}
                        alt="movie image"
                    />
                </Stack>
            </Box>

            <LogUserModal
                open={isLogUserModalVisible}
                onClose={() => setIsLogUserModalVisible(false)}
            />
        </>
    );
}

export default LoginPage;