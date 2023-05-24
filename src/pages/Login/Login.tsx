import React, { useState } from 'react'
import { Grid, TextField, Paper, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { login } from '../../helpers/services/auth'

import { AxiosError } from 'axios'

const Login = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState({ username: '', password: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleLogin = async () => {
    // fetch('https://dummyjson.com/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     username: 'kminchelle',
    //     password: '0lelplR',
    //     // expiresInMins: 60, // optional
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then(console.log);
    // await fetch('https://dummyjson.com/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     username: 'kminchelle',
    //     password: '0lelplR',
    //   }),
    // });
    try {
      const { data } = await login(user.username, user.password)
      localStorage.setItem('token', data.token)
      navigate('/')
    } catch (err) {
      if (err instanceof AxiosError) {
        // 👉️ err is type Error here
        alert(err?.response?.data.message)
      }
      console.log(err)
    }
  }

  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid container spacing={3} alignItems={'center'}>
          <Grid item xs={12}>
            <TextField label='Username' name='username' value={user.username} onChange={handleChange}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Password'
              name='password'
              value={user.password}
              type={'password'}
              onChange={handleChange}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth onClick={handleLogin}>
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Login
