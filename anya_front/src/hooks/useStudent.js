import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getSingleStudent } from '../api/StudentsAPI';
import { getSingleTeacher } from '../api/TeachersAPI';

const useStudent = () => {

    const [student, setStudent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), async user => {
            let userRecord = null;
            await user.getIdTokenResult().then(async (idTokenResult) => {
                if (idTokenResult.claims.Student) {
                    userRecord = await getSingleStudent(user);
                    userRecord.role = "Estudiante";
                } else if (idTokenResult.claims.Teacher) {
                    userRecord = await getSingleTeacher(user);
                    userRecord.role = "Maestro";
                } else if (idTokenResult.claims.admin) {
                    userRecord = await getSingleStudent(user);
                    userRecord = { ...userRecord, role: "Admin" };
                }
                setStudent(userRecord);
            });
            setIsLoading(false);
        });

        return unsubscribe;
    }, []);
    return { student, isLoading }
}

export default useStudent;