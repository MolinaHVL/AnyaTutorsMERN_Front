import AllStudents from "../components/AllStudents";
import Sidebar from "../components/SideBarMaestro/Sidebar";
import { useState, useEffect } from "react";
import { getStudents } from "../api/StudentsAPI";

const ListStudents = () => {

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
        <div className="container">
            <Sidebar />
            <AllStudents
                students={allStudents}
            />
        </div>
    );
};


export default ListStudents;