import { Grid } from "@mui/material";
import StudentInfo from "./StudentInfo";
import { useEffect, useState } from "react";
import { getTeachers } from "../api/TeachersAPI"
const AllTeachers = () => {

    const [allTeachers, setAllTeachers] = useState([]);

    const getAllTeachers = async () => {
        const Teachers = await getTeachers();
        setAllTeachers(Teachers);
    }

    useEffect(() => {
        getAllTeachers();
    }, []);

    if (allTeachers.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <Grid container spacing={2} sx={{ mt: 1 }}>
            {allTeachers.map((teacher) => {
                return (
                    <Grid item xs={12} sm={6} md={4} key={teacher._id}>
                        <StudentInfo
                            student={teacher}
                            rol={"Maestro"}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default AllTeachers;