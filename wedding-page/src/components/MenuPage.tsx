import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider, Paper, Box } from '@mui/material';

const MenuPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper elevation={4} sx={{ p: 4 }}>
        <Typography variant="h3" gutterBottom align="center">
          Menu
        </Typography>

        <Box mb={3}>
          <Typography variant="h5">Apps</Typography>
          <List>
            <ListItem><ListItemText primary="Mini grilled cheese with duck" /></ListItem>
            <ListItem><ListItemText primary="Mini quiche" /></ListItem>
            <ListItem><ListItemText primary="Salmon canape" /></ListItem>
            <ListItem><ListItemText primary="Spanakopita" /></ListItem>
            <ListItem><ListItemText primary="Charcuterie & Crudité board" /></ListItem>
          </List>
        </Box>

        <Divider />

        <Box my={3}>
          <Typography variant="h5">Salad</Typography>
          <List>
            <ListItem><ListItemText primary="House Salad" /></ListItem>
          </List>
        </Box>

        <Divider />

        <Box my={3}>
          <Typography variant="h5">Pasta Course</Typography>
          <List>
            <ListItem><ListItemText primary="Penne alla vodka" /></ListItem>
          </List>
        </Box>

        <Divider />

        <Box my={3}>
          <Typography variant="h5">Entrees</Typography>
          <List>
            <ListItem><ListItemText primary="Grilled Salmon" /></ListItem>
            <ListItem><ListItemText primary="Chicken marsala" /></ListItem>
          </List>
        </Box>

        <Divider />

        <Box my={3}>
          <Typography variant="h5">Sides</Typography>
          <List>
            <ListItem><ListItemText primary="Roasted Rosemary potatoes" /></ListItem>
            <ListItem><ListItemText primary="Asparagus" /></ListItem>
          </List>
        </Box>

        <Divider />

        <Box mt={3}>
          <Typography variant="h5">Dessert</Typography>
          <List>
            <ListItem><ListItemText primary="Cake (our own)" /></ListItem>
            <ListItem><ListItemText primary="Cookies (our own)" /></ListItem>
            <ListItem><ListItemText primary="Espresso" /></ListItem>
            <ListItem><ListItemText primary="Coffee decaf" /></ListItem>
          </List>
        </Box>
      </Paper>
    </Container>
  );
};

export default MenuPage;
