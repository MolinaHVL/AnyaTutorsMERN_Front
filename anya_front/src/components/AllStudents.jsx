import { Grid } from "@mui/material";
import StudentInfo from "./StudentInfo";
import Top from "./Body Section/Top";

const AllStudents = ({ students }) => {
    return (
        <div className='mainContentAdmin'>
            <Top />

            <div className='bottom flex'>
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

            </div>

        </div>
    );
}

export default AllStudents;