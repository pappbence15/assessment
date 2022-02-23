import {Alert, Collapse, IconButton} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from "@mui/icons-material/Close";

export default function SuccessAlert(props){
    return(
        <Collapse in={props.open}>
            <Alert severity="success"
                   iconMapping={{
                       success: <CheckCircleOutlineIcon fontSize="inherit" />,
                   }}
                   action={
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
                Saved!
            </Alert>
        </Collapse>
    )
}