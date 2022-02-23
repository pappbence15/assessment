import React from 'react';
import ReactDOM from 'react-dom';
import UsersTable from './routes/Users';
import AddNewUserForm from "./routes/AddNewUser";
import EditUser from "./routes/EditUser";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import {Container, ThemeProvider, CssBaseline} from "@mui/material";
import Header from "./components/Header";
import {lightTheme} from "./themeProvider";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
      <ThemeProvider theme={lightTheme}>
          <CssBaseline/>
      <Container maxWidth={"lg"}>
          <Header/>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<UsersTable/>} />
              <Route path="/new" element={<AddNewUserForm/>}/>
              <Route path="/edit/:userId" element={<EditUser />}/>
          </Routes>
      </BrowserRouter>
      </Container>
      </ThemeProvider>
  </StyledEngineProvider>,
  document.getElementById('root')
);
