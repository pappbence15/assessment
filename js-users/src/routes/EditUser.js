import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {
    Backdrop,
    Button,
    Card,
    CardContent,
    CircularProgress,
    Container,
    Grid,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import * as React from "react";
import ErrorAlert from "../components/ErrorAlert";
import SuccessAlert from "../components/SuccessAlert";

export default function EditUser() {
    const {userId} = useParams();
    const [errorMessage, setErrorMessage] = useState(null);
    const [error, setError] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
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
            <Container maxWidth="xs">
                <Grid mt={10}>
                <Card>
                    <CardContent>
                        <Stack spacing={4}>
                            <Typography>Edit user</Typography>
                            <TextField id="outlined-basic" label="First name" variant="outlined"
                                       defaultValue={userFirstName}
                                       onChange={(e)=>setUserFirstName(e.target.value)}/>
                            <TextField id="outlined-basic" label="Last name" variant="outlined"
                                       defaultValue={userLastName}
                                       onChange={(e)=>setUserLastName(e.target.value)}/>
                            <Button variant="contained" color="secondary" type={"submit"} onClick={handleSubmit}>
                                Save
                            </Button>
                        </Stack>
                        <ErrorAlert open={isError} close={setIsError} errorMessage={errorMessage}/>
                        <SuccessAlert open={isSuccess} close={setIsSuccess}/>
                    </CardContent>
                </Card>
                </Grid>
            </Container>
        )
    }

    function handleSubmit() {
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
            .then((response)=>checkError(response))
            .catch((error) => {
                setErrorMessage(error.toString());
                setIsError(true);
            })
    }

    function checkError(response){
        if(response.status >= 200 && response.status <= 299){
            setIsSuccess(true);
        } else {
            throw Error(response.statusText);
        }
    }
}