import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import {Backdrop, CircularProgress, Pagination} from "@mui/material";
import UserTableRow from "../components/UserTableRow";

export default function UsersTable() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const paginationCount = Math.ceil(users.length / 10);
    const usersLen = users.length;

    const pageLimit = 10;

    function handleChange(event, value){
        setPage(value);
    }

    useEffect(()=> {
        const url = '/users';
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setTimeout(()=>{
                        setIsLoaded(true);
                        setUsers(result);
                    }, 1000)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if(error){
        return (
            <div>
                <h1>{error}</h1>
            </div>
        )
    } else if (!isLoaded){
        return (
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={!isLoaded}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        )
    } else {
        return (
            <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>First name</TableCell>
                            <TableCell align="right">Last name</TableCell>
                            <TableCell align="right">Created at</TableCell>
                            <TableCell align="right">Active/Locked</TableCell>
                            <TableCell align="right">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {getUsersForOnePage().map((user) => (
                            <UserTableRow user={user} key={user.id} handleClick={handleClick}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
                <Pagination count={paginationCount} onChange={handleChange} />
            </div>
        );
    }
    function getUsersForOnePage(){
        const lastIndex = page === paginationCount ? usersLen - 1 : (page * pageLimit) - 1;
        const firstIndex = (page * pageLimit) - pageLimit;

        return users.slice(firstIndex, lastIndex + 1);
    }

    function handleClick(id, status){
        const active = "active";
        const locked = "locked";
        updateStatus("/users/" + id, status === active ? locked : active)
    }

    function updateStatus(url, status){
        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify({
                "status": status,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }
}