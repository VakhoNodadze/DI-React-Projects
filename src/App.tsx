import { useEffect } from 'react';
import { Box } from '@mui/material';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard';

import { isUserAuthenticated } from './utils/helpers';

function App() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isUserAuthenticated()) navigate('/login');
  // }, [isUserAuthenticated()]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Box>
  );
}

export default App;
