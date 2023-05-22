import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getSingleStudent } from '../api/StudentsAPI';

const useStudent = () => {

    const [student, setStudent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), async user => {
            const Student = await getSingleStudent(user);
            await user.getIdTokenResult().then((idTokenResult) => {
                setStudent({ ...Student, token: idTokenResult.claims });
            })
            setIsLoading(false);
        });

        return unsubscribe;
    }, []);
    return { student, isLoading }
}

export default useStudent;