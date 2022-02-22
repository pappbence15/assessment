import {useState} from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import createStyles from "@mui/styles/createStyles";
import {Fab, Link, Switch} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

export default function UserTableRow(props){
    const [status, setStatus] = useState(props.user.status);

    const style = createStyles(getStatusStyle())

    return (
        <TableRow
        key={props.user.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
        <TableCell component="th" scope="row" style={style}>
            {props.user.first_name}
        </TableCell>
        <TableCell align="right" style={style}>{props.user.last_name}</TableCell>
        <TableCell align="right" style={style}>{props.user.created_at}</TableCell>
        <TableCell align="right">
            <Switch checked={status !== "active"} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }}/>
        </TableCell>
        <TableCell align="right">
            <Fab color="secondary" aria-label="edit" size={"small"} href={`/edit/${props.user.id}`}>
                <EditIcon />
            </Fab>
        </TableCell>
    </TableRow>
    )

    function getStatusStyle(){
        return status === "active" ? {textDecoration: "none"} : {textDecoration: "line-through"};
    }

    function handleChange(){
        const active = "active";
        const locked = "locked";
        props.handleClick(props.user.id, status);
        setStatus(status === active ? locked : active)
    }
}