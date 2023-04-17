const SERVER_URL = process.env.REACT_APP_API_URL + "/students/";

export const getStudents = async () => {
    try {
        const response = await fetch(SERVER_URL);

        if (response.status === 200) return response.json();
        else return [];
    } catch (error) {
        console.log(error);
    }
};

export const saveStudent = async (Student, UserUID) => {
    try {
        console.log(process.env.REACT_APP_API_URL)
        const response = await fetch(SERVER_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "User-UID": UserUID
            },
            body: JSON.stringify(Student),
        });

        if (response.status === 201) return response.json();
        else return false;
    } catch (error) {
        console.log(error);
    }
};

export const updateStudent = async (Student) => {
    try {
        const response = await fetch(SERVER_URL + Student._id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Student),
        });

        if (response.status === 200) return response.json();
        else return false;
    } catch (error) {
        console.log(error);
    }
};

export const deleteStudent = async (id) => {
    try {
        const response = await fetch(SERVER_URL + id, { method: "DELETE" });
        return response.status === 204;
    } catch (error) {
        console.log(error);
    }
};