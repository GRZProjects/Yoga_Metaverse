import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import React from 'react'


const Login = () => {
    const paperStyle = { padding: 50, height: '50vh', width: 280, margin: '20px auto' }
    const btnStyle = { margin: '8px 0' }
    return (
        <Grid align='left'>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar></Avatar>
                    <h2> Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter Username' variant="standard" fullWidth required />
                <TextField label='Password' placeholder='Enter Password' type='password' variant="standard" fullWidth required />

                <FormControlLabel control={<Checkbox />} label="Remember me" />
                <Button type='submit' variant='contained' style={btnStyle} fullWidth>Sign In</Button>
                <Typography>
                    <Link href="#">forgot password ?</Link>
                </Typography>
                <Typography>Do you have an account ?
                    <Link>Sign up</Link>
                </Typography>

            </Paper>
        </Grid>
    )
}

export default Login