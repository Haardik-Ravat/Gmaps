import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import {Appbar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons';
const header=()=>{

    return (
<Appbar position='static'>
<Toolbar className={classes.toolbar}>
<Typography variant='h5' className={classes.title}>Maps</Typography>

<Box display='flex'>

<Typography variant='h6' className={classes.title}><Search></Search></Typography>

<Autocomplete>

<div className={classes.search}>
    <div className={classes.icon}>
<SearchIcon/>

    </div>

<Inputbase placeholder="Search..."  classes={{root: classes.InputRoot, input:classes.inputInput}}/>
</div>

</Autocomplete>

</Box>

</Toolbar>
</Appbar>

       
      );
}

export default header;