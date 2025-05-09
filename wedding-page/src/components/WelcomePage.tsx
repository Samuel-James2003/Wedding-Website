import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import Schedule  from "./Schedule";

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
        <Typography variant="h4" gutterBottom>
          Our Love Story
          </Typography>
          <Typography variant="body1" gutterBottom>
          ...
        </Typography>
      </Paper>
      < Schedule />
    </Container>
  );
};

export default WelcomePage;
