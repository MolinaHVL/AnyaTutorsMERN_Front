import { Grid } from "@mui/material";
import StudentInfo from "./StudentInfo";
import { useEffect, useState } from "react";
import { getStudents } from "../api/StudentsAPI";

const AllStudents = () => {

    const [allStudents, setAllStudents] = useState([]);

    const getAllStudents = async () => {
        const Students = await getStudents();
        setAllStudents(Students);
    }

    useEffect(() => {
        getAllStudents();
    }, []);

    if (allStudents.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <Grid container spacing={2} sx={{ mt: 1 }}>
            {allStudents.map((student) => {
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