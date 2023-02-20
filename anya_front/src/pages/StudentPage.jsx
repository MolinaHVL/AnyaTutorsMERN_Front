import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import useUser from '../hooks/useUser'


const StudentPage = () => {

    //custom hook para saber si el usuario esta logeado
    const { user, isLoading } = useUser();

    return (
        <Box container sx={{
            display: "static",
            width: "50%",
            marginX: "20%",
            marginY: "5%",
            padding: "5%",
            paddingTop: "2%",
            background: "Black",
            color: "white",
            opacity: "0.75",
        }}>
            {user
                ? <Typography color="white" display="block" fontSize={"36px"} padding={"5px"} marginBottom={"20px"}> Eres un estudiante </Typography>
                : <Typography color="white" display="block" fontSize={"36px"} padding={"5px"} marginBottom={"20px"}> Inicia sesion primero </Typography>
            }
        </Box>

    );
}

export default StudentPage;