import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const HeroSec = () => {
  return (
    <Grid container direction="column" alignItems="center" sx={{mt:5}}>
      <Grid item xs={12} sm={6} justifyContent="center" sx={{p:5}}>
        <Typography variant="h3" color="inherit" pt={5}>
          Organize you Work and life,finally.
        </Typography>
        <Typography variant="body2" color="inherit" pt={2}>
          Become focused, organized, and calm with Todoist. The world’s #1 task
          manager and to-do list app.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} justifyContent="center">
        <Box
          component="img"
          src="/herosection-bg.jpeg"
          sx={{
           borderRadius:5,
           height: 500,
           width:  800,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default HeroSec;
