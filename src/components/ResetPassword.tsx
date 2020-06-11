import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Router, Route, Link } from "react-router-dom";
import { Grid, Paper, TextField, Divider, IconButton, Typography } from '@material-ui/core';
import '../custom.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LoginService from '../services/LoginService';
import axios from 'axios'
const baseUrl = 'https://mighty-badlands-73447.herokuapp.com';
const img = require('../assets/images/1.jpg')
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
    },

  },
  textField: {
    // minWidth: 280,
    marginTop: 20,
    width:'100%'
  },
  contain: {
    margin: '0 auto'
  },
  paper: {
    minHeight: 370,
    maxWidth: 450,
    minWidth: 337,
    textAlign: 'center',
    display: 'block',
    margin: 'auto'
  },
  bottomPaper: {
    display: 'inherit',
    fontSize: 'small',
    marginTop: '50px'
  },
  link: {
    color: '#0095ff',
    display: 'inline-block'
  }

}));

export default function ResetPassword(props:any,loginService:LoginService) {
  const { match: { params } } = props;
  
  const classes = useStyles();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function resetRequest() {
    let data = {
        email:email,
        password: password,
        id: params.id
      }
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

  if(email=='' && password=='') {
    alert('Email and password fields are empty')
    return
  }
  else if(!emailRegex.test(email)) {
    alert('Incorrect email')
    return
  } else if(!(password.length > 7)) {
    alert('Password must be length 8')
    return
  }
  

    axios.put(`${baseUrl}/user/resetPassword`,data).then((response:any) => {
      alert('Password reset successfully')
      setEmail('');
      setPassword('')
      
    }).catch((err:any) => {
      console.log(err)
      alert('Bad Request:Password reset failed')
      setEmail('');
      setPassword('')
    })
  }

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12} className={classes.contain}>
          <Paper className=' form' elevation={0} >
            <div className='  forgot-form' >
              <h3 className='title'>Forgot Password </h3>
              <form className={classes.root} noValidate autoComplete='off'>
                <Typography className='forgot-message'>No Worries! Enter your email and new password </Typography>
                    <div className='input-placeholder'>
                      <TextField value={email} onChange={(e:any) => setEmail(e.target.value)} 
                      id="outlined-basic"placeholder='Email Address' variant="outlined"   className={classes.textField}/>
                    </div>
                    <div className='input-placeholder'>
                      <TextField value={password} onChange={(e:any) => setPassword(e.target.value)} 
                      id="outlined-basic"placeholder='New Password' variant="outlined"   className={classes.textField}/>
                    </div>
                
                <Button onClick={() => resetRequest()} variant='contained' color='primary' className='signup-button form-button mt-3'>
                  Reset Password
                    </Button>
              </form>
            </div>
          </Paper>
        </Grid>
      </Grid>

    </div>
  );
}

