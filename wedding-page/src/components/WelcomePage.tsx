import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";
import { Schedule, Gallery } from "./index"; 
import { AppPaths } from "../utils/AppPaths";

const WelcomePage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${AppPaths.imageUrl("./images/site-bg.png")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={4}
          sx={{
            p: 4,
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(10px)",
          }}
        >
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
            It all began with a simple moment, one that neither of us expected would change our lives forever. From our first conversation, there was something undeniably special. We laughed easily, talked endlessly, and quickly realized that something beautiful was unfolding.<div/><br/>

Over time, we became each other’s best friend, biggest cheerleader, and safe place. Together, we have celebrated milestones, faced challenges, and built a love rooted in trust, respect, and an endless supply of laughter.<div/><br/>

We have grown not just as a couple, but as individuals. We have supported one another, encouraged each other, and shared a vision for the life we want to create. Now, we are so excited to begin this next chapter as husband and husband.<div/><br/>

This wedding is not just a celebration of our love. It is also a celebration of all the moments, big and small, that brought us here. Thank you for being a part of our journey. We cannot wait to share this special day with you.
          </Typography>
        </Paper>
        <Schedule />
        <Gallery />	
      </Container>
    </Box>
  );
};

export default WelcomePage;
