import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


const NavBar = () => {

    return (
        <AppBar position="static" sx={{ backgroundColor: "#010101", color: "#8adaff" }}>
            <Container maxWidth="xl">
                <Toolbar >
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            fontFamily: "verdana",
                            fontWeight: 800,
                            letterSpacing: ".3rem",
                            textDecoration: "none",
                            color: "inherit",
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        AnyaTutors
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;