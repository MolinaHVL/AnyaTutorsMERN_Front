const SERVER_URL = process.env.REACT_APP_API_URL + "/teachers/";

export const getTeachers = async () => {
    console.log(SERVER_URL);
    try {
        const response = await fetch(SERVER_URL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        if (response.status === 200) return response.json();
        else return [];
    } catch (error) {
        console.log(error);
    }
};

export const saveTeacher = async (Teacher) => {
    try {
        console.log(process.env.REACT_APP_API_URL)
        const response = await fetch(SERVER_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Teacher),
        });

        if (response.status === 201) return response.json();
        else return false;
    } catch (error) {
        console.log(error);
    }
};

export const updateTeacher = async (Teacher) => {
    try {
        const response = await fetch(SERVER_URL + Teacher._id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Teacher),
        });

        if (response.status === 200) return response.json();
        else return false;
    } catch (error) {
        console.log(error);
    }
};

export const deleteTeacher = async (id) => {
    try {
        const response = await fetch(SERVER_URL + id, { method: "DELETE" });
        return response.status === 204;
    } catch (error) {
        console.log(error);
    }
};