// import React from "react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetObsData, ObsDataDelete, UpdateObs } from '../../services/obsServices';
// import { GetAllNcrData, NcrDataDelete, UpdateNcr } from "../../services/ncrServices";
// import { PostTaskData } from "../../services/taskService";
// import { PostTaskDataObject } from "../../services/TaskObjectServices";
// import { PostNcrModify } from "../../services/ncrmodifyservices";
// import { GetAllNcrOptionsData2 } from "../../services/ncroptionServices";
import NcrTotal from "./Ncrtotal";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar } from "@mui/material";
import Dashboard from "../User/Dashboard";



import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    maxWidth: 500, // set maximum width for the card
    // maxHeight:500,
    width: '25%', // set width to 100% so that it takes up full width of the container
    height: '185px',
    // margin: 'auto', // center the card horizontally
    // marginTop: '-180px',
    marginTop: '120px',
    marginLeft: '20px'
  },
  Secondcard: {

    maxWidth: 500, // set maximum width for the card
    width: '35%', // set width to 100% so that it takes up full width of the container
    height: '185px',
    // margin: 'auto', // center the card horizontally
    marginTop: '-183px',
    marginLeft: '300px'
  },
  Thirdcard: {
    maxWidth: 500, // set maximum width for the card
    width: '30%', // set width to 100% so that it takes up full width of the container
    height: '185px',
    // margin: 'auto', // center the card horizontally
    marginTop: '-184px',
    marginLeft: '685px'
  },

  DivCard: {
    marginTop: '-4rem'
  },


  content: {
    overflowWrap: 'break-word', // break long words to fit within the card
    textAlign: 'center'
  },
});


const Home = () => {

  // const [length, setLength] = useState(data && data[0] && data[0].observations ? data[0].observations.length : 0);
  //  const [ncrlength, setncrLength] = useState(data && data[0] && data[0].ncr ? data[0].ncr.length : 0);

  const [length, setLength] = useState(() => {
    const storedLength = localStorage.getItem('length');
    return storedLength ? parseInt(storedLength) : data && data[0] && data[0].observations ? data[0].observations.length : 0;
  });

  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const openProfile = () => {
    window.location.href = "/profile";
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const classes = useStyles();

  const { loading, data, skipCount } = useSelector(
    (state) => state.obsReducer
  );

  // useEffect(() => {
  //   setLength(data && data[0] && data[0].observations ? data[0].observations.length : 0);
  // }, [data]);

  useEffect(() => {
    if (data && data[0] && data[0].observations) {
      const newLength = data[0].observations.length;
      setLength(newLength);
      localStorage.setItem('length', newLength);
    }
  }, [data]);

  

  // useEffect(() => {
  //   setncrLength(data && data[0] && data[0].ncr ? data[0].ncr.length : 0);
  // }, [data]);


  // useEffect(() => {
  //   if (!window.performance.navigation.type) { // check if page is refreshed
  //     setLength(0);
  //   }
  // }, []);

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={openProfile}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <div
      style={{
        alignContent: "left",
        width: "80%",
        position: "relative",

        left: "250px",
      }}
    >
      {/*
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{ height: '90px' }}>
                    <Toolbar style={{ marginLeft: '200px' }}>
                        <Avatar src="/profile.png" />
                        <Typography variant="h6" sx={{ color: 'text.white', fontWeight: '600',marginLeft:'10px' }}>
                            {localStorage.getItem("fname")+" "+localStorage.getItem("lname")}
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box>
            */}
      <div >
        <Card className={classes.card} >
          <CardContent className={classes.content} >
            <p1 style={{ fontWeight: 'bold' }}>Total NCR</p1>
            <NcrTotal />
          </CardContent>
        </Card>
        <Card className={classes.Secondcard}>
          <CardContent className={classes.content} >
            <p1 style={{ fontWeight: 'bold' }}>Total NCR in Progress</p1>
            <h1 style={{ marginTop: '40px' }}>0</h1>
          </CardContent>
        </Card>
        <Card className={classes.Thirdcard}>
          <CardContent className={classes.content}>
            <p1 style={{ fontWeight: 'bold' }}>NCR Completed</p1>
            <h1 style={{ marginTop: '40px' }}>0</h1>
          </CardContent>
        </Card>
      </div>
      <div className={classes.DivCard}>
        <Card className={classes.card} >
          <CardContent className={classes.content} >
            <p1 style={{ fontWeight: 'bold' }}>Total Observations</p1>
            <h1 style={{ marginTop: '40px' }}>{length}</h1>
          </CardContent>
        </Card>
        <Card className={classes.Secondcard}>
          <CardContent className={classes.content} >
            <p1 style={{ fontWeight: 'bold' }}>Total Observations in Progress</p1>
            <h1 style={{ marginTop: '40px' }}>0</h1>
          </CardContent>
        </Card>
        <Card className={classes.Thirdcard}>
          <CardContent className={classes.content}>
            <p1 style={{ fontWeight: 'bold' }}>Observations Completed</p1>
            <h1 style={{ marginTop: '40px' }}>0</h1>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default Home;
