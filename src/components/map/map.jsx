import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles.js';

const Map=()=>{
const classes=useStyles();
const isMobile=useMediaQuery('(min-width:600px)');

const coordinates={lat:0, lng:0};
    return(
        <div className={classes.mapContainer}>
{/* <iframe src="https://maps.google.com/maps?q=Tangesir%20Dates%20Products&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width=300 height=150 allowfullscreen></iframe> */}
<GoogleMapReact
bootstrapURLKeys={{key: 'AIzaSyDALRlyRBKfz8uBCIVNeJoJbR_CPy-fncU'}}
defaultCenter={coordinates}
center={coordinates}
defaultZoom={14}
margin={[50,50,50,50]}
options={''}
onClick={''}

onChildClick={''}

>


</GoogleMapReact>
        </div>
    );
}

export default Map;