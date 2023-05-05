import { Typography } from "@mui/material";
import { Link } from "react-router-dom";


function Copyright() {
    return (
        <Typography variant="body2" color="black" align="center" component="div">
            {'Copyright © '}
            <Link color="inherit" href="https://molinahvl.github.io/AnyaTutorsMERN_Front/">
                AnyaTutors
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright;