import {useState} from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import createStyles from "@mui/styles/createStyles";

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
        <TableCell align="right"><button onClick={handleClick}>ChangeStatus</button></TableCell>
    </TableRow>
    )

    function getStatusStyle(){
        return status === "active" ? {textDecoration: "none"} : {textDecoration: "line-through"};
    }

    function handleClick(){
        const active = "active";
        const locked = "locked";
        props.handleClick(props.user.id, status);
        setStatus(status === active ? locked : active)
    }
}