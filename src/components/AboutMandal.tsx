import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import { Typography, Box, AppBar, Avatar, Link } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Image from 'material-ui-image'
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles  =  makeStyles((theme: Theme)  =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    button: {
      // backgroundColor: '#df3088',
      color: 'white',
      padding: '4px 24px'
    }
  }),
);


export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
   
    <div className={classes.root}>
      <Box className='about-mandal'>
       
         <Grid container >
          <Grid item xs={12}>
            <div className='tab-wrap'>
              <AppBar position="static" className='tab-header' >
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className='w-100' indicatorColor="primary">
                  <Tab label="About US" {...a11yProps(0)} className='tab' />
                  <Tab label="Donations" {...a11yProps(1)} className='tab' />
                </Tabs>
              </AppBar>
              </div>
                 <TabPanel value={value} index={0}>
                   <div className='main-wrapper pt-0'> 
                      <Box display='flex' justifyContent='space-between' alignItems='center' className='mb-20' > 
                          <h4 className='h1-title m-0 '>  About Mandal</h4>
                          <a href="/editaboutmandal" className='link'>
                            <Button variant="contained" color='primary' size='small' className={classes.button}>
                             Edit Info
                            </Button>
                            </a>
                       </Box>
                      <div className='about-image'>
                          <Image className='ratio' src="https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg"/>

                      </div>
                      <h3> History </h3>
                    <Box mt={1} mb={1}>
                    <Typography variant	='body2'>
                      Contrary to popular belief, Lorem Ipsum is not simply random text. 
                      It has roots in a piece of classical Latin literature from 45 BC.
                    </Typography>
                    </Box> 

                    <Box mt={1} mb={1}>
                    <Typography variant	='body2'>
                      Contrary to popular belief, Lorem Ipsum is not simply random text. 
                      It has roots in a piece of classical Latin literature from 45 BC.
                    </Typography>
                    </Box> 
                    <Box mt={1} mb={1}>
                    <Typography variant	='body2'>
                      Contrary to popular belief, Lorem Ipsum is not simply random text. 
                      It has roots in a piece of classical Latin literature from 45 BC.
                    </Typography>
                    </Box> 
                   </div>
                  </TabPanel>
               <TabPanel value={value} index={1}>
                  <div className='main-wrapper pt-0'> 
                  <Box display='flex' justifyContent='space-between' alignItems='center' className='mb-20' > 
                          <h4 className='h1-title m-0 '>  Donation </h4>
                          <a href="/editdonationaboutmandal" className='link'>
                          <Button variant="contained" color='primary' size='small' className={classes.button}>
                           Edit Info
                          </Button>
                          </a>
                      </Box>
                    <Grid container> 
                  <Grid item xs={12}>
                    <Box>
                      
                      <Typography variant	='body2' className="donation-details">                
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's.
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      </Typography>
                    </Box>

                      <h3> Address:</h3> 
                    <Box>
                      <p className='font-14 m-0'>Lions Club Mitra Mandal </p>
                      <p className='font-14 m-0'> Mhasoba Chowk,</p>
                      <p className='font-14 m-0'> Dattawadi, pune-411030</p>
                      <p className="font-14"> For online donation, send your remittance at following details.</p>

                      <p className='m-0 font-14'> <span className='label'> Bank: </span> Bank of India </p>
                    <p className='m-0 font-14'> <span className='label'> A/C No: </span> 123456789  </p>
                    <p className='m-0 font-14'> <span className='label'> IFSC / RTGS code: </span> BK123KJl55 </p>
                    <p className='m-0 font-14'> <span className='label'> Mobile No: </span> 8974563210 </p>
                    <p className='m-0 font-14'> <span className='label'> Name: </span> Mr.Abhijit Jachak  </p>
                    <p className='m-0 font-14'> <span className='label'> Bank: </span> Bank of India </p>
                    <p className='m-0 font-14'> <span className='label'> Email: </span> <a href="#"> lionsclubsocial@gmail.com </a> </p>
                  </Box>
                  </Grid>
                </Grid>
                  </div>
                </TabPanel>
          </Grid>
      </Grid>
        
      </Box>
 </div>
  );
}
