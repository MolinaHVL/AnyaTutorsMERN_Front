const SERVER_URL = process.env.REACT_APP_API_URL + "/courses/";

export const getCourses = async () => {
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

export const saveCourse = async (Course) => {
    try {
        console.log(SERVER_URL)
        const response = await fetch(SERVER_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Course),
        });

        if (response.status === 201) return response.json();
        else return false;
    } catch (error) {
        console.log(error);
    }
};

export const updateCourse = async (Course) => {
    try {
        const response = await fetch(SERVER_URL + Course._id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Course),
        });

        if (response.status === 200) return response.json();
        else return false;
    } catch (error) {
        console.log(error);
    }
};

export const deleteCourse = async (id) => {
    try {
        const response = await fetch(SERVER_URL + id, { method: "DELETE" });
        return response.status === 204;
    } catch (error) {
        console.log(error);
    }
};

export const getSingleCourse = async (Course) => {
    try {
        const response = await fetch(SERVER_URL + Course.id, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        if (response.status === 200) return response.json();
        else return false;
    } catch (error) {
        console.log(error);
    }
}