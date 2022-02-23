import {createTheme} from "@mui/material";

export const lightTheme = createTheme( {
    palette: {
        type: 'light',
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#8e24aa',
        },
        text: {
            primary: '#283593',
        },
        background: {
            default: '#eeeeee',
            paper: '#f5f5f5',
        },
    },
});