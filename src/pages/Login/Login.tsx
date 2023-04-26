import { useState } from 'react';
import { Avatar, Snackbar, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

import API from '../../services/API';

interface LoginFormData {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const Login = () => {
  const navigate = useNavigate();

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values: LoginFormData) => {
      //   const users = JSON.parse(localStorage.getItem('users') || '[]');
      //   const user = users.find(
      //     (user: LoginFormData) =>
      //       user.email === values.email && user.password === values.password
      //   );
      //   if (!user) {
      //     setIsSnackbarOpen(true);
      //     return;
      //   }
      //   const now = new Date();
      //   const twentyForHoursFromNow = new Date(
      //     now.getTime() + 24 * 60 * 60 * 1000
      //   );
      //   const timestamp = twentyForHoursFromNow.toISOString();
      //   localStorage.setItem('timestamp', timestamp);
      //   navigate('/dashboard');

      const data = await API.post('/login', {
        email: values.email,
        password: values.password,
      });
      localStorage.setItem('token', data.data.AccessToken);
      navigate('/dashboard');
    },
  });

  return (
    <Grid container component="main" sx={{ height: '100vh', width: '100%' }}>
      <Grid
        item
        xs={6}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={6} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h1" color="primary.main">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              name="email"
              fullWidth
              id="email"
              label="Email"
              value={values.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              sx={{ my: 2 }}
            />
            <TextField
              type="password"
              name="password"
              fullWidth
              label="Password"
              value={values.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Typography variant="body2">Forgot password?</Typography>
              </Grid>
              <Grid item>
                <Link to="/register">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setIsSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setIsSnackbarOpen(false)}
          severity="error"
          sx={{ width: '100%' }}
        >
          Incorrect Credentials
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default Login;
