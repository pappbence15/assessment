import React from 'react';
import ReactDOM from 'react-dom';
import UsersTable from './routes/Users';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<UsersTable/>} />
          </Routes>
      </BrowserRouter>
  </StyledEngineProvider>,
  document.getElementById('root')
);
