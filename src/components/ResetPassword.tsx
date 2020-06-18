import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert, { AlertTitle, Alert } from '@material-ui/lab/Alert'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Router, Route, Link } from "react-router-dom";
import { Grid, Paper, TextField, Divider, IconButton, Typography,Dialog, DialogTitle, List } from '@material-ui/core';
import '../custom.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LoginService from '../services/LoginService';
import axios from 'axios'
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/Alert';
const baseUrl:any = 'https://mighty-badlands-73447.herokuapp.com';
const img:any = require('../assets/images/1.jpg')
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
  },
  input:{
    marginBottom:15,
  },
  Wrapper:{
    padding:'15px'
  }
}));
const style ={
  SuccessIcon : {
      fontSize:'70px',
  }
}
export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}
function SimpleDialog(props: SimpleDialogProps) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };
  const handleListItemClick = (value: string) => {
    onClose(value);
  };
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title" className='delete-post'><h4 className='m-0 h1-title'>Reset Password</h4> <a href=""><CloseIcon onClick={handleClose}/></a></DialogTitle>
      <List>
          <div className='p-15 t-center'>  
             <CheckCircleIcon style={style.SuccessIcon} className='successfully-text'/>
            <h2 className='t-center m-0 f-w-500 successfully-text'>SUCCESS!</h2>
            <p className='f-w-500 success-message' > Your password has been changed successfully!</p>
            <div className='t-center mt-30 '>
            <a href="ganeshapp://login">
            <Button variant="contained" color="primary" onClick={handleClose}>
                Go to GaneshaApp
                </Button>
            </a>
          </div>
          </div>
      </List>
    </Dialog>
  );
}
export default function ResetPassword(props:any,loginService:LoginService) {
  const vertical='top';
  const horizontal='center';
  const { match: { params } } = props;
  
  const classes = useStyles();
  const [email, setEmail] = useState('')
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
    function handleError() {
      setIsError(!isError)
    }

  function resetRequest() {
    let data = {
        email:email,
        password: password,
        confirmPassword: confirmPassword,
        id: params.id
      }
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  if(email=='' && password=='') {
    
    handleError()
    setErrorMessage('Email and password fields are empty')
    return 
  }
  else if(!emailRegex.test(email)) {
    handleError()
    setErrorMessage('Incorrect email format')
    return
  } else if(!(password.length > 7)) {
    handleError()
    setErrorMessage('Password must be length 8')
    return
  } else if(confirmPassword != password) {
    handleError()
    setErrorMessage('Please confirm your password')
    return
  }
    axios.put(`${baseUrl}/user/resetPassword`,data).then((response:any) => {
      handleClickOpen()
      setEmail('');
      setPassword('');
      setConfirmPassword('')
    }).catch((err:any) => {
      console.log(err)
      handleError()
      setErrorMessage('Bad Request:Password reset failed')
    })
  }
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <div className={classes.root}>
      <div className={classes.Wrapper}>
      <Grid container  >
        <Grid item xs={12} className={classes.contain}>
        <Snackbar open={isError} autoHideDuration={6000} onClose={handleError} anchorOrigin={{ vertical, horizontal }}>
        <Alert severity="error"  action={
         <CloseIcon onClick={handleError}/>
        }>{errorMessage}</Alert>
          </Snackbar>
          <Paper className=' form' elevation={0} >
            <div className='  forgot-form' >
              <h3 className='title'>Forgot Password </h3>
              <form className={classes.root} noValidate autoComplete='off'>
                <Typography className='forgot-message'>No Worries! Enter your email and new password </Typography>
                    <div className={classes.input}>
                      <TextField autoComplete='off' value={email} onChange={(e:any) => setEmail(e.target.value)} 
                      id="outlined-basic"placeholder='Email Address' variant="outlined"   className={classes.textField}/>
                    </div>
                    <div className={classes.input}>
                      <TextField autoComplete='off' value={password} onChange={(e:any) => setPassword(e.target.value)}  type="password"
                      id="outlined-basic"placeholder='New Password' variant="outlined"   className={classes.textField}/>
                    </div>
                    <div className={classes.input}>
                      <TextField  onChange={(e:any) => setConfirmPassword(e.target.value)} 
                     value={confirmPassword} id="outlined-basic2" placeholder='Confirm Password' variant="outlined" type="password"  className={classes.textField}/>
                    </div>
                    <Button  onClick={() => resetRequest()}   variant='contained' color='primary' className='signup-button form-button mt-3'>
                      Reset Password
                    </Button>
                    <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
              </form>
            </div>
          </Paper>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}
