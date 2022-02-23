import {Alert, Collapse, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ErrorAlert(props){
    return (
        <Collapse in={props.open}>
            <Alert severity="error" action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        props.close(false);
                    }}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
            }>
                {props.errorMessage}
            </Alert>
    </Collapse>
    )
}