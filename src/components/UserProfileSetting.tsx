import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, green } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import TextField from '@material-ui/core/TextField';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import CallIcon from '@material-ui/icons/Call';
import '../custom.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(2),
      },
    },
    BasicInfo:{
        margin: theme.spacing(2)
    },
    square: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    rounded: {
      color: '#fff',
      backgroundColor: green[500],
    },
    large: {
        width: '130px',
        height: '130px',
        borderRadius: '20px',
        // marginTop:100,
        background:'#ff9688'
      },
      ProfileEdit: {
          position: 'absolute',
          left:'68%',
          bottom :'12px',
          cursor:'pointer'

      },
      ProfileEditPosition :{
          position: 'relative'
      },
      ProfileName :{
          alignSelf:'flex-end',
          marginBottom :'45px',
        //   marginLeft:20
      },
      EditButton : {
          transform:' translate(7px, -46px)',
          marginRight:'24px',
          fontSize:'10px'
      },
      changeCover:{
        fontSize:'10px',
        transform: 'translate(-16px, 16px)'
      },
      media: {
        height: 0,
        paddingTop: '30.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: '#ff9688',
        borderRadius:'20%'
      },
        TextField : {
       width:'100%',
    // marginTop: 26
  }
  }),
);
const styles = {
    paper:{
      padding:'30px'
    },
    TextField : {
      width:'100%',
      // marginTop: 26
    }
  }
export default function VariantAvatars() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }
  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current!.offsetWidth);
  // }, []);
  const [age, setAge] = React.useState('');
  return (
   <div >
        <div className='profile'>   
           <Paper className='profile-details' elevation={1}>
            {/* <div className='changephoto'>
                <Button variant="outlined" color="primary" className={classes.changeCover} >
                    Change Cover Photo
                </Button>
            </div> */}
            <div className='profil-img'>
              <div className='info-wrapper'>
                <div className={classes.ProfileEditPosition}>

                  <div className={classes.root}>
                      <Avatar  variant="rounded" alt="Remy Sharp" src="" className={classes.large} />
                  </div>
                  <div className={classes.ProfileEdit}>
                      <Avatar >
                      < CameraAltIcon />
                      </Avatar>
                  </div>
                </div>
                  <div className={classes.ProfileName}>
                    <h3 >Yogesh Jadhav</h3>
                    <p className='role'>Member</p>
                  </div>
              </div>
              
            </div>
           
             {/* <div className='editprofile'>
                <Button variant="contained" color="primary" className={classes.EditButton}>
                    Edit Profile
                </Button>
            </div> */}
          </Paper>
         
          <div className='basic-info main-wrapper' >
              <div className={classes.BasicInfo}>
                <h3>Basic Information:</h3>
                <form noValidate autoComplete="off">
                  <Grid container spacing={3}>
                    <Grid item xs={12} >
                      <div className='iconposition input-placeholder' style={styles.TextField} >
                          <TextField id="outlined-basic" placeholder="User Name" variant="outlined"  className='w-100'/>
                          <InputAdornment position="start" className='icon'>
                              <AccountCircle />
                          </InputAdornment>
                      </div>
                     </Grid>
                     <Grid item xs={12} >
                      <div className='iconposition input-placeholder' style={styles.TextField}>
                          <TextField id="outlined-basic" placeholder="Email Address" variant="outlined"  className='w-100'/>
                          <InputAdornment position="start" className='icon'>
                            <MailIcon />
                          </InputAdornment>
                      </div>
                     </Grid>
                     <Grid item xs={12} >
                      <div className='iconposition input-placeholder' style={styles.TextField}>
                          <TextField id="outlined-basic" placeholder="Mobile Number" variant="outlined"  className='w-100'/>
                          <InputAdornment position="start" className='icon'>
                              <CallIcon />
                          </InputAdornment>
                      </div>
                     </Grid>
                     <Grid item xs={12} >
                      <div className='iconposition input-placeholder' style={styles.TextField}>
                          <TextField id="outlined-basic" placeholder="City" variant="outlined"  className='w-100'/>
                          <InputAdornment position="start" className='icon'>
                              <LocationCityIcon />
                          </InputAdornment>
                      </div>
                     </Grid>
                     <Grid item xs={12} className='t-right'>
                        <Button variant="contained" color="primary">
                            Submit
                        </Button>
                      </Grid>
                  </Grid> 
                </form>
   
            </div>
            </div>
       
        </div>
   </div>
  );
 }
