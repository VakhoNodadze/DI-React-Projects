// @ts-nocheck
import React from 'react';
import { Grid, TextField, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [user, setUser] = React.useState({});

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data } = await axios.post('https://dummyjson.com/auth/login', {
        username: user.username,
        password: user.password,
      });
      localStorage.setItem('token', data.token);
      navigate('/');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid container spacing={3} alignItems={'center'}>
          <Grid item xs={12}>
            <TextField label="Username" name="username" value={user.username} onChange={handleChange}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              name="password"
              value={user.password}
              type={'password'}
              onChange={handleChange}></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth onClick={handleLogin}>
              {' '}
              Login{' '}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default LoginPage;
