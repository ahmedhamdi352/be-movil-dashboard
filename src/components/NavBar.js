import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Flex } from '@chakra-ui/core';
import { NavLink } from "react-router-dom";

import '../App.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
           
          <Typography variant="h6" className={classes.title}>
           <NavLink
             to="/home"
             activeStyle={{
                fontWeight: "bold",
                color: "#ffff",
                textDecoration:'none'

              }}
             exact>
             <p style={{color:'#ffff',textDecoration:'none'}}> Configration</p>
             </NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <NavLink
             to="/plan"
             activeStyle={{
                fontWeight: "bold",
                color: "#ffff",
                textDecoration:'none'

              }}
             exact>
              <p style={{color:'#ffff',textDecoration:'none'}}> Plans</p>
             </NavLink>
            
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
