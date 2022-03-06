import { Avatar, Box, Button, Card, Container, Grid, Paper, ThemeProvider, CardHeader, IconButton } from '@mui/material';
import { blue, orange, yellow } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import React from 'react';


const userStyles = makeStyles({
    root: {
        background: 'lightorange',
        border: 1,
        borderRadius: 3,
        //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'black',
      },
})



function accounDetails(){


}

function History(){

}

function logout(){

}

function subscriptionDetails(){

}



function Profile(){

    const paperStyle1 = { padding: 50, width: '100%'}
    const paperStyle2 = { height: '100%', width: '10%'}
    const paperStyle3 = { height: '100vh', width: '100%'}
    const classes = userStyles();

    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.substr(-2);
        }
    }
    function stringAvatar(name) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }
    
   
    return (

        <Grid container  spacing={2} >
            <Grid xs={12} height='15vh' sx={{ paddingLeft: 10, paddingRight: 3, paddingTop:3 , margin: 0.1}} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar  {...stringAvatar('Ram Reddy')} sx={{ bgcolor: orange[500], width: 80, height: 80 }} />
              }
              titleTypographyProps={{variant:'h3' }}
              title="Ram Reddy A"
              subheader=""
              
            />
               
            </Grid>

            <Grid xs={2} height='100vh'  className={classes.root}>
            <Box pt={4}>
              <Button fullWidth> Account </Button>
              <Button fullWidth> History </Button>
              <Button fullWidth> Subscription </Button>
              <Button fullWidth>Sign Out</Button>
            </Box>

            </Grid>
            <Grid xs={10} height='100vh'  className={classes.root}>
                
            </Grid>
        </Grid>

       

    )
    

}


export default Profile;