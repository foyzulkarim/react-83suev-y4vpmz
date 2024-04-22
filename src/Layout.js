import React from 'react';
import { Stack, Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';

const LeftNavButtons = () => {
  return (
    <Stack direction="column" spacing={1}> 
      <Button variant="contained">Home</Button>
      <Button variant="contained">Explore</Button>
      <Button variant="contained">Notifications</Button>
      {/* Add more buttons as needed */}
    </Stack>
  );
};

const MiddleContent = () => {
  return (
    <Stack direction="column" spacing={2}> 
      <Card>
        <CardContent>
          <Typography variant="h5">Card Title 1</Typography>
          {/* Your card content here */}
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h5">Card Title 2</Typography>
          {/* Your card content here */}
        </CardContent>
      </Card>
      {/* Add more cards as needed */}
    </Stack>
  );
};


const RightButtons = () => {
  return (
    <Stack direction="column" spacing={1}> 
      <Button variant="outlined">Tweet</Button>
      <Button variant="outlined">Messages</Button>
      <Button variant="outlined">Settings</Button>
      {/* Add more buttons as needed */}
    </Stack>
  );
};

const HomepageLayout = () => {
  return (
    <Box sx={{ height: '100vh' }}>
      {' '}
      {/* Ensures layout takes full viewport height */}
      <Grid container height='100%'>
        <Grid item xs={12} sm={2} sx={{ bgcolor: 'lightgray', height: '20%' }}>
          {/* Top section (adjust bgcolor as needed) */}
        </Grid>
        <Grid item xs={12} sm={2} sx={{ bgcolor: 'lightblue' }}>
          <LeftNavButtons />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ overflowY: 'auto' }}>
          {/* Scrollable middle content */}
          <MiddleContent />
        </Grid>
        <Grid item xs={12} sm={2} sx={{ bgcolor: 'lightgreen' }}>
          <RightButtons />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomepageLayout;
