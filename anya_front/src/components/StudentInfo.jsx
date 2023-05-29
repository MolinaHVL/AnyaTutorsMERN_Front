import { Box, Stack, Typography } from "@mui/material";


const StudentInfo = ({ student, rol }) => {
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
                <div className="adminImage">
                    {student && <img src={student.picture} alt='Estudiante' id='estu' />}
                </div>
                <Stack spacing={1} sx={{ width: 1 }}>
                    <Typography fontSize={20} fontFamily={'Poppins'} sx={{ fontWeight: 'bold' }}>Email: </Typography>
                    <Typography fontSize={16} fontFamily={'Poppins'} sx={{ overflowWrap: "break-word" }}>{student.correo}</Typography>
                    <Typography fontSize={20} fontFamily={'Poppins'} sx={{ fontWeight: 'bold' }}>Usuario: </Typography>
                    <Typography fontSize={16} fontFamily={'Poppins'} sx={{ overflowWrap: "break-word" }}>{student.nombre}</Typography>
                </Stack>
                <Stack spacing={1} sx={{ width: 1 }}>
                    <Typography fontSize={16} fontFamily={'Poppins'} sx={{ fontWeight: 'bold' }}>Rol:</Typography>
                    <Typography fontSize={20} fontFamily={'Poppins'}>{rol}</Typography>
                </Stack>
            </Stack>
        </Box>
    );
};

export default StudentInfo;