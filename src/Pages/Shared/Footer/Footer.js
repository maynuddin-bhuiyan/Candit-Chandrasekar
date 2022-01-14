import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import logo from '../../../images/logo.png';
import './Footer.css';


const Footer = () => {
    return (
        <div className='Footer'>


            <Grid className='Footer_Text' container spacing={2} columns={16}>

                <Grid className='Text' item xs={4} md={4}>
                    <Typography variant="h1" component="h2">
                        <img src={logo} alt="" />
                    </Typography>
                    <Typography variant="h6" >
                        <p>The best social network for <br></br>
                            business</p>
                    </Typography>

                </Grid>
                <Grid className='Text' item xs={4} md={4}>
                    <Typography variant="h5" component="h2">
                        Quick Link <br /><br /><br />

                        <ul>
                            <li>Help center</li>
                            <li>Apps</li>
                            <li>Privacy Policy</li>
                            <li>Terms &amp; Conditions</li>
                        </ul>
                    </Typography>
                </Grid>
                <Grid className='Text' item xs={4} md={4}>
                    <Typography variant="h5" component="h2">
                        Contact Me <br /> <br /> <br />


                        <ul>
                            <li>mayuddinbhuiyan.com</li>
                            <br></br>
                            <li>01908145097</li><br></br>
                            <li><a href="https://maynuddin-bhuiyan.netlify.app/" target="_blank">maynuddin-bhuiyan</a></li>

                        </ul>
                    </Typography>


                </Grid>




            </Grid>

        </div>
    );
};

export default Footer;