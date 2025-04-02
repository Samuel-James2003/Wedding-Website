import React from "react";
import { Container, Typography, Button, Paper, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const WelcomePage: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ my: 8 }}>
      <Paper elevation={3} sx={{ textAlign: "center", p: 4 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Our Wedding!
        </Typography>
        <Typography variant="body1" gutterBottom>
          We're delighted to have you celebrate this special day with us.
        </Typography>
      </Paper>
    </Container>
  );
};

export default WelcomePage;
