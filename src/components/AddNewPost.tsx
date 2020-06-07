import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, green } from '@material-ui/core/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import { positions, textAlign } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(2),
      },
    },
    Addpost:{
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
        marginTop:100,
        background:'#ff9688',
        marginBottom:0
      },
      ProfileEdit: {
          position: 'absolute',
          left:'68%',
          bottom :'-6px'

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
          transform:' translate(7px, -33px)',
          marginRight:'22px',
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
  }),
);

export default function VariantAvatars() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }
  return (
   <div className='add-new-post'>
        <Paper elevation={1} className='profile'>   
        <Paper className='profile-details' elevation={1}>
              <div className='changephoto'>
                <Button variant="outlined" color="primary" className={classes.changeCover} >
                    Change Cover Photo
                </Button>
             </div>
             <div className='profil-img'>
                <div className={classes.ProfileEditPosition}>

                    <div className={classes.root}>
                        <Avatar  variant="rounded" alt="Remy Sharp" src="" className={classes.large} />
                    </div>
                    <div className={classes.ProfileEdit}>
                        <Avatar >
                        < EditIcon />
                        </Avatar>
                    </div>
                </div>
                <div className={classes.ProfileName}>
                    <h3 >Yogesh Jadhav</h3>
                    <p className='role'>Member</p>
                </div>
            </div>
            <div className='editprofile'>
                <Button variant="contained" color="primary" className={classes.EditButton}>
                    Edit Profile
                </Button>
            </div>
          </Paper>
           <div className=' main-wrapper'>
            <div className='follow'>
                <Grid container >
                    <Grid item xs={4}>
                        <p className='f-14'>Post</p>
                        <h3>0</h3>
                    </Grid>
                    <Grid item xs={4}>
                        <p className='f-14'>Following</p>
                        <h3>10</h3>
                    </Grid>
                    <Grid item xs={4}>
                        <p className='f-14'>Follows</p>
                        <h3>02</h3>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.Addpost} >
                <div className='icon' >
                     <NotificationsIcon className='background-icon'/>
                </div>
                <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:'center'}}>
                    Hmmm, seems like you haven’t been interacting with the app much..Let’s explore the app add add new posts
                </Typography>
                <div className='add-new-button'>
                      <Button variant="contained" color="primary" >
                          Add New Post
                      </Button>
                  </div>
            </div>
          </div>
       </Paper>
   </div>
  );
 }
