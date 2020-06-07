import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import classes from '*.module.css';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  alignment:{
    textAlign:'center',
    marginTop:100
  }
});
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
            <p className='f-w-500 success-message' > You have changed your password succesfully!</p>
            <div className='t-center mt-30 '>
                <Button variant="contained" color="primary" onClick={handleClose}>
                    Go To the Homepage
                </Button>
          </div>
          </div>

      </List>
    </Dialog>
  );
}

export default function SimpleDialogDemo() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div className={classes.alignment}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Reset Password
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}
