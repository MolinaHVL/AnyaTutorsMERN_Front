import { Box, Stack, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const StudentInfo = ({ student }) => {
    return (
        <Box
            sx={{
                backgroundColor: "white",
                height: 380,
                border: 1,
                borderRadius: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}

        >
            <Stack
                sx={{
                    height: 0.8,
                    px: 4,
                    width: 0.9,
                    paddingTop: 0.1,
                    center: true,
                    justifyContent: "center"
                }}
                alignItems={"center"}
                spacing={2}
            >
                <AccountCircleIcon sx={{ fontSize: "80px" }} />
                <Stack spacing={1} sx={{ width: 1 }}>
                    <Typography fontSize={20} fontFamily={'Poppins'} sx={{ fontWeight: 'bold' }}>Email: </Typography>
                    <Typography fontSize={16} fontFamily={'Poppins'} sx={{ overflowWrap: "break-word" }}>{student.email}</Typography>
                    <Typography fontSize={20} fontFamily={'Poppins'} sx={{ fontWeight: 'bold' }}>Password: </Typography>
                    <Typography fontSize={16} fontFamily={'Poppins'} sx={{ overflowWrap: "break-word" }}>{student.password}</Typography>
                </Stack>
                <Stack spacing={1} sx={{ width: 1 }}>
                    <Typography fontSize={16} fontFamily={'Poppins'} sx={{ fontWeight: 'bold' }}>Role:</Typography>
                    <Typography fontSize={20} fontFamily={'Poppins'}>Student</Typography>
                </Stack>
            </Stack>
        </Box>
    );
};

export default StudentInfo;