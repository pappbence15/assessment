import {
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {useState} from "react";
import ErrorAlert from "../components/ErrorAlert";
import SuccessAlert from "../components/SuccessAlert";


export default function AddNewUserForm(){

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [errorMessage, setErrorMessage] = useState("");
const [isError, setIsError] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);

    return(
    <Container maxWidth="xs">
        <Grid mt={10}>
        <Card>
            <CardContent>
                <Stack spacing={4}>
                    <Typography>Create new user</Typography>
                        <TextField id="outlined-basic" label="First name" variant="outlined"
                                   onChange={(e)=>setFirstName(e.target.value)}/>
                        <TextField id="outlined-basic" label="Last name" variant="outlined"
                                   onChange={(e)=>setLastName(e.target.value)}/>
                        <Button variant="contained" color="primary" type={"submit"} onClick={handleSubmit}>
                            Create
                        </Button>
                </Stack>
                <ErrorAlert open={isError} close={setIsError} errorMessage={errorMessage}/>
                <SuccessAlert open={isSuccess} close={setIsSuccess}/>
            </CardContent>
        </Card>
        </Grid>
    </Container>
    )

    function handleSubmit(){
        fetch('/users', {
            method: 'POST',
            body: JSON.stringify({
                "first_name": firstName,
                "last_name": lastName,
                "status": "active"
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
            setFirstName("");
            setLastName("");
            setIsSuccess(true);
        } else {
            throw Error(response.statusText);
        }
    }

}