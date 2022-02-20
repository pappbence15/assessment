import {Button, Grid, TextField} from "@mui/material";
import {useState} from "react";


export default function AddNewUserForm(){

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");

    return(
        <Grid container>
            <Grid item>
                    <TextField id="outlined-basic" label="First name" variant="outlined"
                               onChange={(e)=>setFirstName(e.target.value)}/>
                    <TextField id="outlined-basic" label="Last name" variant="outlined"
                               onChange={(e)=>setLastName(e.target.value)}/>
                    <Button variant="contained" color="success" type={"submit"} onClick={handleSubmit}>
                        Create
                    </Button>
            </Grid>
        </Grid>
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
            .then(res => res.json())
            .then(
                (error) => console.log(error)
            )
    }

}