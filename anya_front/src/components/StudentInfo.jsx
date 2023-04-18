import { Box, Stack, Typography } from "@mui/material";

const StudentInfo = ({ student }) => {
    return (
        <Box sx={{ backgroundColor: "white", height: 480, border: 1 }}>
            <Stack
                sx={{ height: 0.6, px: 4, width: 0.75 }}
                justifyContent="space-around"
                spacing={2}
            >
                <Stack spacing={1} sx={{ width: 1 }}>
                    <Typography fontSize={24}>{student.email}</Typography>
                    <Typography fontSize={24}>{student.password}</Typography>
                </Stack>
                <Stack spacing={1} sx={{ width: 1 }}>
                    <Typography fontSize={16}>Role:</Typography>
                    <Typography fontSize={24}>Student</Typography>
                </Stack>
            </Stack>
        </Box>


    );
}

export default StudentInfo;