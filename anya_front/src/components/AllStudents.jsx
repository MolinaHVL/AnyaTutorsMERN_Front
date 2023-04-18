import { Grid } from "@mui/material";
import StudentInfo from "./StudentInfo";

const AllStudents = ({ students }) => {
    return (
        <Grid container spacing={2} sx={{ mt: 1 }}>
            {students.map((student) => {
                return (
                    <Grid item xs={12} sm={6} md={4} key={student._id}>
                        <StudentInfo
                            student={student}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default AllStudents;