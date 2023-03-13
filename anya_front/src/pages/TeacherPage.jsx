import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import NavBar from '../components/NavBar';

const TeacherPage = () => {
    return (
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
            <Typography color="Black" display="block" fontSize={"36px"} padding={"5px"} marginBottom={"20px"}> Proximamente </Typography>

        </Box>
    );
}

export default TeacherPage;