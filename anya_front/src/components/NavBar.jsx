import { Button, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom"
import useUser from '../hooks/useUser'
import { getAuth, signOut } from 'firebase/auth';
import { styled } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';

const NavBar = () => {

    //custom hook para saber si el usuario esta logeado
    const { user } = useUser();
    const auth = getAuth()

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/userLogIn')
    }

    const handleLogout = async () => {
        await signOut(auth)
            .then(() => {
                navigate('/')
            })
            .catch((error) => {
                // An error happened.
                console.log(error);
            });
    }

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(cyan[300]),
        backgroundColor: cyan[300],
        '&:hover': {
            backgroundColor: cyan[600],
        },
    }));

    return (
        <AppBar position="static" sx={{ backgroundColor: "#010101", color: cyan[300] }}>
            <Container maxWidth="xl">
                <Toolbar >
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href='/'
                        sx={{
                            mr: 2,
                            flexGrow: 1,
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
                    <Stack direction={'row'} spacing={4} sx={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                        {user
                            ?
                            <>
                                <Typography>{user.email}</Typography>
                                <ColorButton
                                    variant='outlined'
                                    id='log Out'
                                    children='Log Out'
                                    onClick={handleLogout}
                                />
                            </>

                            :
                            <ColorButton
                                variant='outlined'
                                id='log Out'
                                children='Log In'
                                onClick={handleLogin}
                                size='large'
                                sx={{
                                    flexGrow: 0,
                                }}
                            />
                        }
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;