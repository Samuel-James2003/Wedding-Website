import React from "react";
import {
  Paper,
  Box,
  Typography,
} from "@mui/material";

const Rsvp: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 600 }}>
        <Typography variant="h4" gutterBottom align="center">
          Please fill out the form below to RSVP
        </Typography>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSctjcFdfa0s_2VHNddTLjlTJWlHoW-d_Fth8bnwHxFzg9eJfQ/viewform?embedded=true"
          width="100% "
          height="9000"
          title="RSVP Form"
          style={{ border: "none", minHeight: "1550px" }}
        >
          Loading…
        </iframe>
      </Paper>
    </Box>
  );
};

export default Rsvp;
