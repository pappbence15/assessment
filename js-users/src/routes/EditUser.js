import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Backdrop, Button, CircularProgress, Grid, TextField} from "@mui/material";
import * as React from "react";

export default function EditUser() {
    const {userId} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");

    useEffect(() => {
        fetch(`/users/${userId}`)
            .then(res => res.json())
            .then((result) => {
                    setUserFirstName(result.first_name)
                    setUserLastName(result.last_name)
                    setIsLoaded(true);
                },
                (error) => {
                    setError(error);
                    setIsLoaded(true);
                }
            )
    }, [userId])

    if (error) {
        return (
            <div>
                <h1>{error}</h1>
            </div>
        )
    } else if (!isLoaded) {
        return (
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={!isLoaded}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        )
    } else {
        return (
            <Grid container>
                <Grid item>
                    <TextField
                        id="outlined"
                        label="First name"
                        defaultValue={userFirstName}
                        onChange={(e)=>setUserFirstName(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="outlined"
                        label="Last name"
                        defaultValue={userLastName}
                        onChange={(e)=>setUserLastName(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" color="success" type={"submit"} onClick={handleClick}>
                        Change
                    </Button>
                </Grid>
            </Grid>
        )
    }

    function handleClick() {
        fetch(`/users/${userId}`, {
            method: 'PUT',
            body: JSON.stringify({
                "first_name": userFirstName,
                "last_name": userLastName,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res=>res.json())
    }
}