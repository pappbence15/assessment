import {AppBar, Fab, IconButton, Toolbar, Typography} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";

export default function Header(){
    return(
        <AppBar position={"static"}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    href="/"
                    data-testid="homeIcon"
                >
                    <HomeIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Users
                </Typography>
                <Fab variant="extended" color={"default"} href="/new" data-testid="addNewUserButton">
                    <AddIcon sx={{ mr: 1 }}/>
                    Add new user
                </Fab>
            </Toolbar>
        </AppBar>
    )
}