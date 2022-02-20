import React from 'react';
import ReactDOM from 'react-dom';
import UsersTable from './routes/Users';
import AddNewUserForm from "./routes/AddNewUser";
import EditUser from "./routes/EditUser";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import {Container} from "@mui/material";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
      <Container maxWidth={"lg"}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<UsersTable/>} />
              <Route path="/new" element={<AddNewUserForm/>}/>
              <Route path="/edit" element={<EditUser/>}/>
          </Routes>
      </BrowserRouter>
      </Container>
  </StyledEngineProvider>,
  document.getElementById('root')
);
