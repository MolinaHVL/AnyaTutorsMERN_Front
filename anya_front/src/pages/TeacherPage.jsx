import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

const TeacherPage = () => {
    return (
        <Box sx={{
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
            <Typography color="white" display="block" fontSize={"36px"} padding={"5px"} marginBottom={"20px"}> Eres un maestro </Typography>

        </Box>
    );
}

export default TeacherPage;